import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, Calendar, RotateCcw, X, ChevronDown, Sparkles } from 'lucide-react';
import { askGemini, generateItinerary } from '../../services/geminiService';
import { ChatMessage, TypingIndicator } from './ChatMessage';
import ItineraryRenderer from './ItineraryRenderer';
import './ChatBot.css';

const QUICK_QUESTIONS = [
  'What\'s the best time to visit?',
  'How many days do I need?',
  'What food should I try?',
  'Is it safe for solo travellers?',
  'What\'s the local transport like?',
  'What are the hidden gems?',
];

export default function ChatBot({ destination }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hi! I'm your AI travel guide for **${destination.name}** 🌍\n\nAsk me anything — best time to visit, what to eat, how to get around, hidden gems, or let me plan a full itinerary for you!`,
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [itinerary, setItinerary] = useState(null);
  const [itineraryLoading, setItineraryLoading] = useState(false);
  const [itineraryError, setItineraryError] = useState(null);
  const [showItineraryForm, setShowItineraryForm] = useState(false);
  const [itineraryDays, setItineraryDays] = useState(3);
  const [itineraryPrefs, setItineraryPrefs] = useState('');
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (content) => {
    if (!content.trim() || loading) return;

    const userMessage = { role: 'user', content: content.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const allMessages = [...messages, userMessage];
      const response = await askGemini(allMessages, destination);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    } catch (err) {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Sorry, I encountered an error: ${err.message}. Please try again.`
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleQuick = (q) => {
    if (!loading) sendMessage(q);
  };

  const handleGenerateItinerary = async () => {
    setItineraryLoading(true);
    setItineraryError(null);
    setItinerary(null);
    setShowItineraryForm(false);

    setMessages(prev => [...prev, {
      role: 'user',
      content: `Please plan a ${itineraryDays}-day itinerary for ${destination.name}${itineraryPrefs ? ` (${itineraryPrefs})` : ''}.`
    }]);

    try {
      const result = await generateItinerary(destination, itineraryDays, itineraryPrefs);
      setItinerary(result);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `I've created your ${itineraryDays}-day itinerary for ${destination.name}! Scroll down to see your complete day-by-day plan below. ✨`
      }]);
    } catch (err) {
      setItineraryError(err.message);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Sorry, I couldn't generate the itinerary: ${err.message}. Please try again.`
      }]);
    } finally {
      setItineraryLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{
      role: 'assistant',
      content: `Hi! I'm your AI travel guide for **${destination.name}** 🌍\n\nAsk me anything — best time to visit, what to eat, how to get around, hidden gems, or let me plan a full itinerary for you!`,
    }]);
    setItinerary(null);
  };

  return (
    <div className="chatbot">
      {/* Header */}
      <div className="chatbot__header">
        <div className="chatbot__header-left">
          <div className="chatbot__avatar">
            <Sparkles size={18} />
          </div>
          <div>
            <div className="chatbot__title">AI Travel Guide</div>
            <div className="chatbot__subtitle">{destination.name} Expert</div>
          </div>
        </div>
        <div className="chatbot__header-actions">
          <div className="chatbot__online-dot" aria-label="Online" />
          <button
            className="btn btn-ghost btn-sm"
            onClick={clearChat}
            title="Clear conversation"
            aria-label="Clear chat"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="chatbot__messages" role="log" aria-live="polite" aria-label="Chat messages">
        {messages.map((msg, i) => (
          <ChatMessage key={i} message={msg} />
        ))}
        {loading && <TypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick questions */}
      <div className="chatbot__quick-questions scroll-x" role="list" aria-label="Quick questions">
        {QUICK_QUESTIONS.map(q => (
          <button
            key={q}
            role="listitem"
            className="chatbot__quick-btn"
            onClick={() => handleQuick(q)}
            disabled={loading}
          >
            {q}
          </button>
        ))}
      </div>

      {/* Itinerary trigger */}
      <div className="chatbot__itinerary-trigger">
        <button
          className="btn btn-gold w-full"
          onClick={() => setShowItineraryForm(!showItineraryForm)}
          aria-expanded={showItineraryForm}
        >
          <Calendar size={16} />
          Plan My Trip
          <ChevronDown
            size={14}
            style={{
              marginLeft: 'auto',
              transform: showItineraryForm ? 'rotate(180deg)' : 'none',
              transition: 'transform var(--transition-base)'
            }}
          />
        </button>

        {showItineraryForm && (
          <div className="chatbot__itinerary-form animate-fadeIn">
            <div className="chatbot__form-row">
              <label htmlFor="itinerary-days" className="chatbot__form-label">Trip Duration</label>
              <div className="chatbot__days-picker">
                {[2, 3, 5, 7, 10, 14].map(d => (
                  <button
                    key={d}
                    className={`chatbot__day-opt ${itineraryDays === d ? 'active' : ''}`}
                    onClick={() => setItineraryDays(d)}
                    aria-pressed={itineraryDays === d}
                  >
                    {d}d
                  </button>
                ))}
              </div>
            </div>

            <div className="chatbot__form-row">
              <label htmlFor="itinerary-prefs" className="chatbot__form-label">Preferences (optional)</label>
              <input
                id="itinerary-prefs"
                type="text"
                className="input-field"
                placeholder="Budget travel, luxury, hiking, food tour…"
                value={itineraryPrefs}
                onChange={e => setItineraryPrefs(e.target.value)}
              />
            </div>

            <button
              className="btn btn-primary w-full"
              onClick={handleGenerateItinerary}
              disabled={itineraryLoading}
              aria-busy={itineraryLoading}
            >
              {itineraryLoading ? (
                <><div className="spinner spinner-sm" /> Generating itinerary…</>
              ) : (
                <><Sparkles size={16} /> Generate {itineraryDays}-Day Itinerary</>
              )}
            </button>
          </div>
        )}
      </div>

      {/* Input */}
      <form className="chatbot__input-row" onSubmit={handleSubmit} role="search">
        <input
          ref={inputRef}
          type="text"
          className="chatbot__input"
          placeholder={`Ask about ${destination.name}…`}
          value={input}
          onChange={e => setInput(e.target.value)}
          disabled={loading}
          aria-label="Type your question"
          maxLength={500}
        />
        <button
          type="submit"
          className="chatbot__send"
          disabled={!input.trim() || loading}
          aria-label="Send message"
        >
          <Send size={16} />
        </button>
      </form>

      {/* Itinerary output */}
      {itinerary && (
        <div className="chatbot__itinerary-output">
          <div className="chatbot__itinerary-output-header">
            <h3 className="display-md" style={{ fontSize: '1.1rem' }}>Your Itinerary</h3>
            <button
              className="btn btn-ghost btn-sm"
              onClick={() => setItinerary(null)}
              aria-label="Close itinerary"
            >
              <X size={16} />
            </button>
          </div>
          <ItineraryRenderer itinerary={itinerary} />
        </div>
      )}
    </div>
  );
}
