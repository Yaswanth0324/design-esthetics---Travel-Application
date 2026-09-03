const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
const MODEL_NAMES = [
  'gemini-3.6-flash',
  'gemini-3.1-flash-lite',
];

async function fetchWithFallback(body) {
  let lastErr = null;
  for (const model of MODEL_NAMES) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;
    
    // Try up to 2 times for each model in case of temporary rate limit or network glitch
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const res = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        });
        if (res.ok) {
          return await res.json();
        }
        const errJson = await res.json().catch(() => ({}));
        const msg = errJson.error?.message || `HTTP ${res.status}`;
        lastErr = new Error(msg);
        
        // If it's a 503 or 429, wait 600ms before retrying
        if (res.status === 503 || res.status === 429) {
          await new Promise(resolve => setTimeout(resolve, 600));
        } else {
          break; // Don't retry non-transient errors like 400
        }
      } catch (e) {
        lastErr = e;
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }
  }
  throw lastErr || new Error('Unable to connect to Gemini AI service. Please try again in a moment.');
}

export async function askGemini(messages, destination) {
  const systemPrompt = `You are an expert travel assistant specializing in ${destination.name}, ${destination.country}. 
You provide helpful, accurate, and enthusiastic travel advice. 
Keep responses conversational, warm, and concise (2-4 paragraphs max unless generating an itinerary).
You know everything about local culture, food, transport, weather, costs, safety, and hidden gems.`;

  const contents = messages.map(m => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  const body = {
    system_instruction: { parts: [{ text: systemPrompt }] },
    contents,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 2048,
    },
  };

  const data = await fetchWithFallback(body);
  return data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';
}

export async function generateItinerary(destination, days, preferences = '') {
  const prompt = `Generate a detailed ${days}-day travel itinerary for ${destination.name}, ${destination.country}.
${preferences ? `Traveler preferences: ${preferences}` : ''}

IMPORTANT: Respond ONLY with valid JSON in this exact format (no markdown, no backticks, just raw JSON):
{
  "title": "string",
  "destination": "string",
  "duration": number,
  "summary": "string",
  "days": [
    {
      "day": number,
      "title": "string",
      "theme": "string",
      "activities": [
        {
          "time": "string",
          "name": "string",
          "description": "string",
          "type": "sightseeing|food|transport|accommodation|activity|shopping",
          "duration": "string",
          "tips": "string"
        }
      ],
      "accommodation": "string",
      "meals": {
        "breakfast": "string",
        "lunch": "string",
        "dinner": "string"
      },
      "estimatedCost": "string"
    }
  ],
  "totalBudget": "string",
  "tips": ["string", "string", "string"],
  "bestTimeToVisit": "string"
}`;

  const body = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.6,
      maxOutputTokens: 4096,
    },
  };

  const data = await fetchWithFallback(body);
  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

  // Strip any markdown code fences if present
  const cleaned = text.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim();
  
  try {
    return JSON.parse(cleaned);
  } catch {
    throw new Error('Failed to parse itinerary response');
  }
}
