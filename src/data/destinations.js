export const destinations = [
  {
    id: 'london',
    name: 'London',
    country: 'England (United Kingdom)',
    continent: 'Europe',
    tagline: 'History, royal majesty, and relentless culture',
    description:
      'London is a global capital where 2,000 years of history live alongside cutting-edge modern culture. From the historic Tower of London and majestic Buckingham Palace to the West End theatre district and world-class free museums, London captivates travelers with endless discovery.',
    coordinates: { lat: 51.5074, lon: -0.1278 },
    tags: ['culture', 'history', 'art', 'urban', 'architecture'],
    bestTime: 'May–September',
    language: 'English',
    currency: 'GBP (£)',
    timezone: 'GMT UTC+0',
    rating: 4.9,
    famousPlaces: [
      {
        id: 'big-ben',
        name: 'Big Ben & Parliament',
        description:
          'The iconic 96-metre Elizabeth Tower housing the world\'s most famous clock, standing proudly beside the Palace of Westminster on the River Thames.',
        category: 'Landmark',
        pexelsQuery: 'big ben london parliament',
      },
      {
        id: 'tower-bridge',
        name: 'Tower Bridge',
        description:
          'The Victorian suspension and bascule bridge completed in 1894, an architectural masterpiece with high-level walkways giving panoramic London views.',
        category: 'Monument',
        pexelsQuery: 'tower bridge london',
      },
      {
        id: 'british-museum',
        name: 'The British Museum',
        description:
          'A world-renowned museum dedicated to human history, art, and culture — housing 8 million works including the Rosetta Stone and Egyptian mummies.',
        category: 'Museum',
        pexelsQuery: 'british museum glass roof london',
      },
      {
        id: 'buckingham-palace',
        name: 'Buckingham Palace',
        description:
          'The official London residence of the British monarch, famous for its grand State Rooms, balcony appearances, and the ceremonial Changing of the Guard.',
        category: 'Palace',
        pexelsQuery: 'buckingham palace london',
      },
    ],
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    continent: 'Asia',
    tagline: 'Where ancient tradition meets neon future',
    description:
      'Tokyo is a city of extraordinary contrasts — ancient shrines tucked between glass towers, world-class cuisine on every corner, and a energy that never sleeps. From Shibuya\'s iconic scramble crossing to the serene temples of Asakusa, Tokyo offers an experience unlike anywhere else on Earth.',
    coordinates: { lat: 35.6762, lon: 139.6503 },
    tags: ['culture', 'food', 'urban', 'temples', 'nightlife'],
    bestTime: 'March–May & Oct–Nov',
    language: 'Japanese',
    currency: 'JPY (¥)',
    timezone: 'JST UTC+9',
    rating: 4.9,
    famousPlaces: [
      {
        id: 'sensoji',
        name: 'Senso-ji Temple',
        description:
          "Tokyo's oldest temple, founded in 628 AD, draws millions each year with its iconic Kaminarimon gate, sprawling incense-filled courtyard, and vibrant Nakamise shopping street.",
        category: 'Temple',
        pexelsQuery: 'sensoji temple tokyo',
      },
      {
        id: 'shibuya',
        name: 'Shibuya Crossing',
        description:
          'The world\'s busiest pedestrian crossing, where up to 2,500 people cross simultaneously in every direction — a kinetic spectacle at the heart of Tokyo\'s fashion and pop culture district.',
        category: 'Landmark',
        pexelsQuery: 'shibuya crossing tokyo',
      },
      {
        id: 'shinjuku-gyoen',
        name: 'Shinjuku Gyoen',
        description:
          'A vast national garden blending Japanese, French, and English landscaping — 58 acres of calm in the city\'s heart, famous for its breathtaking cherry blossoms each spring.',
        category: 'Park',
        pexelsQuery: 'shinjuku gyoen garden',
      },
      {
        id: 'teamlab',
        name: 'teamLab Planets',
        description:
          'An immersive digital art museum where you walk through rooms of infinity mirrors, floating flowers, and interactive light installations — art you experience with your whole body.',
        category: 'Art',
        pexelsQuery: 'teamlab digital art installation',
      },
    ],
  },
  {
    id: 'paris',
    name: 'Paris',
    country: 'France',
    continent: 'Europe',
    tagline: 'The city that invented romance',
    description:
      'Paris is a living museum of art, architecture, and gastronomy. Every boulevard feels like a painting, every café like a stage. From the Eiffel Tower\'s golden glow at night to the hushed corridors of the Louvre, Paris seduces with a beauty that\'s both monumental and intimate.',
    coordinates: { lat: 48.8566, lon: 2.3522 },
    tags: ['art', 'food', 'romance', 'architecture', 'culture'],
    bestTime: 'April–June & Sep–Oct',
    language: 'French',
    currency: 'EUR (€)',
    timezone: 'CET UTC+1',
    rating: 4.8,
    famousPlaces: [
      {
        id: 'eiffel',
        name: 'Eiffel Tower',
        description:
          'The 330-metre iron marvel that was once called an eyesore and is now the world\'s most-visited paid monument. At night, it sparkles with 20,000 light bulbs every hour.',
        category: 'Monument',
        pexelsQuery: 'eiffel tower paris',
      },
      {
        id: 'louvre',
        name: 'The Louvre',
        description:
          'The world\'s largest art museum houses 35,000 works — from the Mona Lisa to the Venus de Milo — inside a former royal palace. You\'d need a month to see it all properly.',
        category: 'Museum',
        pexelsQuery: 'louvre museum paris',
      },
      {
        id: 'montmartre',
        name: 'Montmartre',
        description:
          'The bohemian hilltop village where Picasso, Monet, and Renoir once lived and worked. Cobblestone streets lead to the luminous Sacré-Cœur basilica and the city\'s best panoramic view.',
        category: 'District',
        pexelsQuery: 'montmartre paris',
      },
      {
        id: 'versailles',
        name: 'Palace of Versailles',
        description:
          'The Sun King\'s audacious palace — 700 rooms, 67 staircases, and 800 hectares of geometrically perfect gardens — that set the template for royal grandeur across Europe.',
        category: 'Palace',
        pexelsQuery: 'palace versailles gardens',
      },
    ],
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    continent: 'Asia',
    tagline: 'Island of the gods',
    description:
      'Bali is a spiritual and sensory feast — terraced rice paddies cascading down volcanic slopes, flower-strewn temple ceremonies, surf-pounded black-sand beaches, and a warmth of welcome that feels genuinely ancient. It\'s Indonesia\'s cultural crown jewel.',
    coordinates: { lat: -8.3405, lon: 115.092 },
    tags: ['beaches', 'culture', 'temples', 'nature', 'wellness'],
    bestTime: 'April–October',
    language: 'Balinese / Indonesian',
    currency: 'IDR (Rp)',
    timezone: 'WITA UTC+8',
    rating: 4.8,
    famousPlaces: [
      {
        id: 'uluwatu',
        name: 'Uluwatu Temple',
        description:
          'A dramatic sea temple perched 70 metres above crashing Indian Ocean waves, best visited at sunset when Kecak fire dancers perform against a blazing sky.',
        category: 'Temple',
        pexelsQuery: 'uluwatu temple bali',
      },
      {
        id: 'ubud-rice',
        name: 'Tegallalang Rice Terraces',
        description:
          'A UNESCO-recognised subak irrigation system carved into a steep valley — the emerald green terraces are a symbol of Bali and the Balinese relationship with land and water.',
        category: 'Nature',
        pexelsQuery: 'tegallalang rice terraces bali',
      },
      {
        id: 'seminyak',
        name: 'Seminyak Beach',
        description:
          'Bali\'s most glamorous stretch of sand — world-class beach clubs, boutique surf shops, and legendary sunsets that paint the sky in shades of gold and crimson.',
        category: 'Beach',
        pexelsQuery: 'seminyak beach bali sunset',
      },
      {
        id: 'tanah-lot',
        name: 'Tanah Lot',
        description:
          'A 16th-century sea temple rising from a rocky outcrop at the ocean\'s edge — one of Bali\'s most photographed and spiritually significant sites, especially at low tide.',
        category: 'Temple',
        pexelsQuery: 'tanah lot temple bali',
      },
    ],
  },
  {
    id: 'new-york',
    name: 'New York',
    country: 'United States',
    continent: 'North America',
    tagline: 'The city that never sleeps',
    description:
      'New York City is the world in one place — 8 million stories compressed into 302 square miles of steel, light, and ambition. From the hushed grandeur of Central Park to the kinetic energy of Times Square, it\'s a city that demands you meet it at full speed.',
    coordinates: { lat: 40.7128, lon: -74.006 },
    tags: ['urban', 'culture', 'food', 'art', 'nightlife'],
    bestTime: 'April–June & Sep–Nov',
    language: 'English',
    currency: 'USD ($)',
    timezone: 'EST UTC-5',
    rating: 4.7,
    famousPlaces: [
      {
        id: 'central-park',
        name: 'Central Park',
        description:
          '843 acres of manicured wilderness at the heart of Manhattan — a park designed by Frederick Law Olmsted that has been a backdrop for films, romances, protests, and picnics since 1858.',
        category: 'Park',
        pexelsQuery: 'central park new york',
      },
      {
        id: 'statue-liberty',
        name: 'Statue of Liberty',
        description:
          'France\'s 1886 gift to America — a 93-metre copper colossus on Liberty Island that remains the most powerful symbol of freedom and immigration in the Western world.',
        category: 'Monument',
        pexelsQuery: 'statue of liberty new york',
      },
      {
        id: 'met-museum',
        name: 'The Metropolitan Museum',
        description:
          'The largest art museum in the Americas holds over two million objects spanning 5,000 years — from Egyptian mummies to contemporary photography, it\'s a world in 17 acres.',
        category: 'Museum',
        pexelsQuery: 'metropolitan museum art new york',
      },
      {
        id: 'high-line',
        name: 'The High Line',
        description:
          'A 2.3-km elevated railway transformed into a public park above the streets of Chelsea and Hell\'s Kitchen — a model of urban regeneration with art, gardens, and Hudson River views.',
        category: 'Park',
        pexelsQuery: 'high line park new york',
      },
    ],
  },
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    continent: 'Europe',
    tagline: 'Volcanic beauty above the Aegean',
    description:
      'Santorini is the Aegean\'s most dramatic island — a flooded volcanic caldera rimmed with white-washed villages that seem to pour like snow down black cliffs to a deep blue sea. It\'s a place of extreme, almost theatrical beauty.',
    coordinates: { lat: 36.3932, lon: 25.4615 },
    tags: ['beaches', 'romance', 'architecture', 'food', 'sunsets'],
    bestTime: 'May–October',
    language: 'Greek',
    currency: 'EUR (€)',
    timezone: 'EET UTC+2',
    rating: 4.9,
    famousPlaces: [
      {
        id: 'oia',
        name: 'Oia Village',
        description:
          'The island\'s most iconic village, famous for its sugar-cube architecture, blue-domed churches, and the most photographed sunset in the world — crowds gather at the castle every evening.',
        category: 'Village',
        pexelsQuery: 'oia santorini sunset',
      },
      {
        id: 'red-beach',
        name: 'Red Beach',
        description:
          'A volcanic beach of deep crimson and black sands backed by towering ochre cliffs — one of the most visually striking beaches in Europe, accessible only by boat or a steep footpath.',
        category: 'Beach',
        pexelsQuery: 'red beach santorini',
      },
      {
        id: 'akrotiri',
        name: 'Akrotiri Ruins',
        description:
          'A Minoan Bronze Age city buried by the same volcanic eruption that formed the caldera around 1600 BC — often called the \'Greek Pompeii\', its preservation is extraordinary.',
        category: 'Archaeological',
        pexelsQuery: 'akrotiri ruins santorini',
      },
      {
        id: 'fira',
        name: 'Fira Town',
        description:
          'The island\'s bustling capital perched at the caldera\'s edge, reached by cable car, donkey, or 588 steps — a maze of boutiques, restaurants, and jaw-dropping caldera-view terraces.',
        category: 'Town',
        pexelsQuery: 'fira santorini caldera',
      },
    ],
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'United Arab Emirates',
    continent: 'Asia',
    tagline: 'Where the future is already here',
    description:
      'Dubai is an audacious experiment in human ambition — a fishing village transformed in five decades into a global metropolis of record-breaking skyscrapers, man-made islands, and ultra-luxury experiences. It\'s a place where the impossible is the norm.',
    coordinates: { lat: 25.2048, lon: 55.2708 },
    tags: ['luxury', 'urban', 'shopping', 'architecture', 'desert'],
    bestTime: 'November–March',
    language: 'Arabic / English',
    currency: 'AED (د.إ)',
    timezone: 'GST UTC+4',
    rating: 4.7,
    famousPlaces: [
      {
        id: 'burj-khalifa',
        name: 'Burj Khalifa',
        description:
          'At 828 metres, the world\'s tallest building for over a decade — its observation decks on floors 124 and 148 offer views across the desert, the Gulf, and the curvature of the earth.',
        category: 'Skyscraper',
        pexelsQuery: 'burj khalifa dubai',
      },
      {
        id: 'palm-jumeirah',
        name: 'Palm Jumeirah',
        description:
          'The world\'s largest man-made island in the shape of a palm tree — home to ultra-luxury hotels, private beach villas, and the famous Atlantis resort at its apex.',
        category: 'Island',
        pexelsQuery: 'palm jumeirah dubai',
      },
      {
        id: 'dubai-creek',
        name: 'Dubai Creek & Old Souk',
        description:
          'The historic heart of old Dubai, where traditional wooden abras (water taxis) cross a tidal creek between the gold and spice souks — a sensory immersion in pre-oil Dubai.',
        category: 'Market',
        pexelsQuery: 'dubai creek old souk',
      },
      {
        id: 'desert-safari',
        name: 'Arabian Desert',
        description:
          'The vast sand sea that surrounds the city — visited on 4x4 dune safaris with camel rides, falconry, and Bedouin camps under an enormous unpolluted sky full of stars.',
        category: 'Nature',
        pexelsQuery: 'dubai desert safari dunes',
      },
    ],
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    country: 'Peru',
    continent: 'South America',
    tagline: 'The lost city in the clouds',
    description:
      'Machu Picchu sits at 2,430 metres on a ridge between two sharp Andean peaks, surrounded by mist and jungle. Built by the Inca in the 15th century and never found by Spanish conquistadors, it was rediscovered in 1911 and remains one of the world\'s most awe-inspiring ancient sites.',
    coordinates: { lat: -13.1631, lon: -72.545 },
    tags: ['history', 'nature', 'hiking', 'archaeological', 'mountains'],
    bestTime: 'April–October',
    language: 'Spanish / Quechua',
    currency: 'PEN (S/.)',
    timezone: 'PET UTC-5',
    rating: 4.9,
    famousPlaces: [
      {
        id: 'sun-gate',
        name: 'Inti Punku (Sun Gate)',
        description:
          'The mountaintop gateway through which the Inca Trail enters Machu Picchu — the first dramatic glimpse of the citadel spread below, best seen at sunrise when clouds roll through the valley.',
        category: 'Archaeological',
        pexelsQuery: 'machu picchu sun gate inca',
      },
      {
        id: 'huayna-picchu',
        name: 'Huayna Picchu Mountain',
        description:
          'The steep, cloud-shrouded peak that looms behind every classic Machu Picchu photograph — climbing it (limited daily permits) rewards with vertiginous views straight down to the citadel.',
        category: 'Mountain',
        pexelsQuery: 'huayna picchu mountain',
      },
      {
        id: 'inca-trail',
        name: 'Inca Trail',
        description:
          'The 43-km mountain trek that the Inca built to reach Machu Picchu — passing cloud forests, high-altitude passes, and dozens of smaller Inca ruins over four extraordinary days.',
        category: 'Hiking',
        pexelsQuery: 'inca trail peru hiking',
      },
      {
        id: 'sacred-valley',
        name: 'Sacred Valley',
        description:
          'The fertile Urubamba River valley studded with Inca agricultural terraces, fortress ruins, and traditional market villages — the living landscape that fed and protected Machu Picchu.',
        category: 'Valley',
        pexelsQuery: 'sacred valley peru inca',
      },
    ],
  },
  {
    id: 'cape-town',
    name: 'Cape Town',
    country: 'South Africa',
    continent: 'Africa',
    tagline: 'Mountains, ocean, and everything wild',
    description:
      'Cape Town occupies one of the most dramatically beautiful settings of any city on Earth — squeezed between the flat-topped Table Mountain and two oceans, with white beaches, world-class wine, and the most biodiverse floral kingdom on the planet on its doorstep.',
    coordinates: { lat: -33.9249, lon: 18.4241 },
    tags: ['nature', 'beaches', 'wildlife', 'food', 'adventure'],
    bestTime: 'November–February',
    language: 'Afrikaans / English / Xhosa',
    currency: 'ZAR (R)',
    timezone: 'SAST UTC+2',
    rating: 4.8,
    famousPlaces: [
      {
        id: 'table-mountain',
        name: 'Table Mountain',
        description:
          'The flat-topped mountain that defines Cape Town\'s skyline, capped with its famous \'tablecloth\' of orographic cloud — reached by rotating cable car for 360° views of city, ocean, and peninsula.',
        category: 'Mountain',
        pexelsQuery: 'table mountain cape town',
      },
      {
        id: 'cape-point',
        name: 'Cape Point',
        description:
          'The dramatic headland at the peninsula\'s southern tip where Atlantic and Indian Ocean currents meet — a rugged wilderness of sea cliffs, fynbos, baboons, and an old lighthouse.',
        category: 'Nature',
        pexelsQuery: 'cape point south africa',
      },
      {
        id: 'robben-island',
        name: 'Robben Island',
        description:
          'The island prison where Nelson Mandela was held for 18 of his 27 imprisoned years — now a UNESCO World Heritage Site and museum, guided by former political prisoners.',
        category: 'History',
        pexelsQuery: 'robben island cape town',
      },
      {
        id: 'bo-kaap',
        name: 'Bo-Kaap',
        description:
          'The rainbow-coloured hillside neighbourhood whose cobblestone streets and candy-painted houses reflect the Muslim Cape Malay culture that has shaped Cape Town for 350 years.',
        category: 'District',
        pexelsQuery: 'bo-kaap cape town colourful houses',
      },
    ],
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    country: 'Japan',
    continent: 'Asia',
    tagline: "Japan's soul in every wooden street",
    description:
      'Kyoto was Japan\'s imperial capital for over a thousand years, and it still carries that weight — in its 1,600 Buddhist temples, 400 Shinto shrines, traditional machiya townhouses, geisha districts, and ancient tea ceremony culture. It\'s Japan in its most concentrated, unhurried form.',
    coordinates: { lat: 35.0116, lon: 135.7681 },
    tags: ['temples', 'culture', 'history', 'nature', 'food'],
    bestTime: 'March–May & Oct–Nov',
    language: 'Japanese',
    currency: 'JPY (¥)',
    timezone: 'JST UTC+9',
    rating: 4.9,
    famousPlaces: [
      {
        id: 'fushimi-inari',
        name: 'Fushimi Inari Shrine',
        description:
          'Ten thousand vermillion torii gates wind up a forested mountainside in one of Japan\'s most mesmerising walks — dedicated to the Shinto god of rice and business, it\'s visited by 3 million people a year.',
        category: 'Shrine',
        pexelsQuery: 'fushimi inari torii gates kyoto',
      },
      {
        id: 'arashiyama',
        name: 'Arashiyama Bamboo Grove',
        description:
          'A narrow path through towering, creaking stands of bamboo that filter the light into an eerie green glow — one of Japan\'s officially designated \'important scenic landscapes\'.',
        category: 'Nature',
        pexelsQuery: 'arashiyama bamboo grove kyoto',
      },
      {
        id: 'kinkakuji',
        name: 'Kinkaku-ji (Golden Pavilion)',
        description:
          'A Zen Buddhist temple whose top two storeys are coated in gold leaf — reflected in a mirror pond surrounded by immaculate gardens, it\'s one of the most-photographed buildings in Japan.',
        category: 'Temple',
        pexelsQuery: 'kinkakuji golden pavilion kyoto',
      },
      {
        id: 'gion',
        name: 'Gion District',
        description:
          'Kyoto\'s most famous geisha district — wooden machiya line the stone streets, and if you\'re patient and respectful on Hanamikoji Street at dusk, you might catch a glimpse of a geiko hurrying to her appointment.',
        category: 'District',
        pexelsQuery: 'gion district kyoto geisha street',
      },
    ],
  },
  {
    id: 'iceland',
    name: 'Reykjavik',
    country: 'Iceland',
    continent: 'Europe',
    tagline: 'Fire, ice, and the northern lights',
    description:
      'Iceland is a place of raw geological drama — geysers that blast boiling water 30 metres into the air, lava fields that look freshly poured, glaciers advancing to the sea, and winter skies alive with the aurora borealis. Reykjavik, the world\'s most northerly capital, is its warm and creative base.',
    coordinates: { lat: 64.1466, lon: -21.9426 },
    tags: ['nature', 'adventure', 'northern lights', 'geysers', 'glaciers'],
    bestTime: 'June–Aug (midnight sun) & Sep–Mar (northern lights)',
    language: 'Icelandic',
    currency: 'ISK (kr)',
    timezone: 'GMT UTC+0',
    rating: 4.8,
    famousPlaces: [
      {
        id: 'blue-lagoon',
        name: 'Blue Lagoon',
        description:
          'A geothermal spa fed by water from the Mid-Atlantic Ridge — milky blue, silica-rich water at 38°C in the middle of a lava field, with steam rising into an arctic sky.',
        category: 'Spa',
        pexelsQuery: 'blue lagoon iceland geothermal',
      },
      {
        id: 'northern-lights',
        name: 'Aurora Borealis',
        description:
          'The northern lights dance across Iceland\'s skies from September to March — green, pink, and violet curtains of ionised particles energised by the solar wind, best seen far from city lights.',
        category: 'Natural Phenomenon',
        pexelsQuery: 'northern lights aurora iceland',
      },
      {
        id: 'golden-circle',
        name: 'Golden Circle',
        description:
          'Iceland\'s classic day trip — the Þingvellir rift valley, the erupting Strokkur geyser, and the thundering Gullfoss waterfall, all within 300 km of Reykjavik.',
        category: 'Route',
        pexelsQuery: 'golden circle geyser iceland',
      },
      {
        id: 'vatnajokull',
        name: 'Vatnajökull Glacier',
        description:
          'Europe\'s largest glacier by volume — 8,100 km² of ancient ice that you can walk on, explore in ice caves of electric blue, or kayak among icebergs in the glacial lagoon at Jökulsárlón.',
        category: 'Glacier',
        pexelsQuery: 'vatnajokull glacier iceland ice cave',
      },
    ],
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    country: 'Spain',
    continent: 'Europe',
    tagline: "Gaudí's city between the sea and the mountains",
    description:
      'Barcelona is Europe\'s most architecturally inventive city — shaped by Antoni Gaudí\'s surrealist imagination, its Gothic Quarter, sandy beaches, world-famous cuisine, and relentless nightlife make it one of the continent\'s most-visited and most-loved destinations.',
    coordinates: { lat: 41.3851, lon: 2.1734 },
    tags: ['architecture', 'beaches', 'food', 'art', 'nightlife'],
    bestTime: 'May–June & Sep–Oct',
    language: 'Catalan / Spanish',
    currency: 'EUR (€)',
    timezone: 'CET UTC+1',
    rating: 4.8,
    famousPlaces: [
      {
        id: 'sagrada-familia',
        name: 'Sagrada Família',
        description:
          'Gaudí\'s life\'s work — a Roman Catholic basilica under construction since 1882, its organic stone towers, kaleidoscopic stained glass, and hyperbolic vaults are utterly unlike any other building on Earth.',
        category: 'Church',
        pexelsQuery: 'sagrada familia barcelona gaudi',
      },
      {
        id: 'park-guell',
        name: 'Park Güell',
        description:
          'Gaudí\'s hilltop garden complex of mosaic terraces, gingerbread gatehouses, and sinuous stone viaducts — offering panoramic views of Barcelona and the Mediterranean from the city\'s best belvedere.',
        category: 'Park',
        pexelsQuery: 'park guell barcelona mosaic',
      },
      {
        id: 'las-ramblas',
        name: 'La Rambla',
        description:
          'Barcelona\'s famous 1.2-km pedestrian boulevard, lined with flower stalls, human statues, and street performers — the noisy, vibrant spine of the city\'s social life.',
        category: 'Boulevard',
        pexelsQuery: 'la rambla barcelona street',
      },
      {
        id: 'gothic-quarter',
        name: 'Gothic Quarter',
        description:
          'The city\'s medieval heart — a labyrinth of narrow stone streets, Roman ruins beneath the pavement, and some of Europe\'s best-preserved Gothic architecture, including the 14th-century cathedral.',
        category: 'District',
        pexelsQuery: 'gothic quarter barcelona medieval',
      },
    ],
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    continent: 'Asia',
    tagline: 'Paradise measured in shades of blue',
    description:
      'The Maldives is an archipelago of 1,200 coral islands scattered across the Indian Ocean — none more than 1.5 metres above sea level. Its waters are among the clearest on Earth: turquoise lagoons, house reefs alive with turtles and manta rays, and overwater bungalows perched above the abyss.',
    coordinates: { lat: 3.2028, lon: 73.2207 },
    tags: ['beaches', 'luxury', 'diving', 'romance', 'nature'],
    bestTime: 'November–April',
    language: 'Dhivehi',
    currency: 'MVR (Rf)',
    timezone: 'MVT UTC+5',
    rating: 4.9,
    famousPlaces: [
      {
        id: 'bioluminescence',
        name: 'Bioluminescent Beach',
        description:
          'At night on certain beaches, the waves glow electric blue as billions of bioluminescent plankton are disturbed by the water — one of nature\'s most other-worldly and fleeting spectacles.',
        category: 'Natural Phenomenon',
        pexelsQuery: 'bioluminescent beach maldives night',
      },
      {
        id: 'overwater-bungalows',
        name: 'Overwater Villas',
        description:
          'The Maldives invented the concept — private villas built on stilts over a turquoise lagoon, with glass floors above the reef, private infinity pools, and a ladder straight into the ocean.',
        category: 'Accommodation',
        pexelsQuery: 'overwater bungalow maldives resort',
      },
      {
        id: 'whale-shark',
        name: 'South Ari Atoll',
        description:
          'One of the world\'s most reliable sites to snorkel and dive with whale sharks year-round — the gentle giants congregate around the atoll\'s bait fish, reaching up to 12 metres in length.',
        category: 'Diving',
        pexelsQuery: 'whale shark maldives diving',
      },
      {
        id: 'male',
        name: 'Malé Old Town',
        description:
          'The densely packed capital island — barely 2 km across — containing the ornate 17th-century Friday Mosque built of coral stone, a colourful fish market, and the National Museum.',
        category: 'City',
        pexelsQuery: 'male maldives city',
      },
    ],
  },
  {
    id: 'sydney',
    name: 'Sydney',
    country: 'Australia',
    continent: 'Oceania',
    tagline: 'Sun-drenched harbour, golden beaches, and iconic architecture',
    description:
      'Sydney is one of the world\'s most dazzling harbour cities — framed by the sail-like shell structures of the Opera House, the majestic Harbour Bridge, and world-famous surf breaks at Bondi and Manly beaches. It blends a laid-back outdoor lifestyle with sophisticated dining and vibrant arts.',
    coordinates: { lat: -33.8688, lon: 151.2093 },
    tags: ['beaches', 'architecture', 'nature', 'urban', 'food'],
    bestTime: 'September–November & Feb–April',
    language: 'English',
    currency: 'AUD ($)',
    timezone: 'AEST UTC+10',
    rating: 4.8,
    famousPlaces: [
      {
        id: 'opera-house',
        name: 'Sydney Opera House',
        description:
          'Jørn Utzon\'s 20th-century architectural masterpiece with its shell-shaped roof sails, hosting over 1,500 performances a year on Sydney Harbour.',
        category: 'Landmark',
        pexelsQuery: 'sydney opera house harbour bridge',
      },
      {
        id: 'bondi-beach',
        name: 'Bondi Beach',
        description:
          'Australia\'s most famous stretch of ocean sand — world-renowned surf breaks, the sea-carved Icebergs pool, and scenic cliff walk to Coogee.',
        category: 'Beach',
        pexelsQuery: 'bondi beach sydney australia',
      },
      {
        id: 'harbour-bridge',
        name: 'Sydney Harbour Bridge',
        description:
          'The world\'s tallest steel arch bridge, affectionately known as \'The Coathanger\' — offering exhilarating BridgeClimb walks and harbour views.',
        category: 'Monument',
        pexelsQuery: 'sydney harbour bridge sunset',
      },
      {
        id: 'botanic-gardens',
        name: 'Royal Botanic Garden',
        description:
          'A 30-hectare botanical oasis established in 1816, wrapping around Farm Cove with stunning views of the Opera House and city skyline.',
        category: 'Park',
        pexelsQuery: 'royal botanic garden sydney skyline',
      },
    ],
  },
  {
    id: 'rome',
    name: 'Rome',
    country: 'Italy',
    continent: 'Europe',
    tagline: 'The Eternal City where history comes alive',
    description:
      'Rome is an open-air museum of nearly 3,000 years of globally influential art, architecture, and culture. Ancient ruins like the Colosseum and Roman Forum stand alongside Renaissance palaces, baroque fountains, and bustling trattorias serving authentic pasta.',
    coordinates: { lat: 41.9028, lon: 12.4964 },
    tags: ['history', 'culture', 'food', 'art', 'architecture'],
    bestTime: 'April–June & Sep–Oct',
    language: 'Italian',
    currency: 'EUR (€)',
    timezone: 'CET UTC+1',
    rating: 4.9,
    famousPlaces: [
      {
        id: 'colosseum',
        name: 'The Colosseum',
        description:
          'The largest ancient amphitheatre ever built, completed in 80 AD — once holding up to 80,000 spectators for gladiatorial contests and public spectacles.',
        category: 'Monument',
        pexelsQuery: 'colosseum rome italy',
      },
      {
        id: 'trevi-fountain',
        name: 'Trevi Fountain',
        description:
          'Rome\'s largest Baroque fountain — legend says tossing a coin over your left shoulder with your right hand ensures your return to the Eternal City.',
        category: 'Landmark',
        pexelsQuery: 'trevi fountain rome',
      },
      {
        id: 'pantheon',
        name: 'The Pantheon',
        description:
          'The best-preserved ancient Roman building with the world\'s largest unreinforced concrete dome, featuring a central oculus open to the sky.',
        category: 'Monument',
        pexelsQuery: 'pantheon interior oculus rome',
      },
      {
        id: 'vatican-city',
        name: 'Vatican Museums & Sistine Chapel',
        description:
          'The spiritual heart of Catholicism housing Michelangelo\'s legendary Sistine Chapel ceiling and centuries of papal art masterpieces.',
        category: 'Museum',
        pexelsQuery: 'vatican museums sistine chapel rome',
      },
    ],
  },
  {
    id: 'india',
    name: 'India',
    country: 'India',
    continent: 'Asia',
    tagline: 'Land of timeless heritage, vibrant cultures, and spiritual beauty',
    description:
      'India is a land of vivid colors, rich royal history, majestic monuments, and breathtaking landscapes. From the ethereal beauty of the Taj Mahal to the serene backwaters of Kerala and ancient temples of South India, India offers an unparalleled journey of discovery.',
    coordinates: { lat: 28.6139, lon: 77.209 },
    tags: ['culture', 'history', 'food', 'temples', 'architecture', 'nature'],
    bestTime: 'October–March',
    language: 'Hindi / English',
    currency: 'INR (₹)',
    timezone: 'IST UTC+5:30',
    rating: 4.9,
    famousPlaces: [
      {
        id: 'taj-mahal',
        name: 'Taj Mahal, Agra',
        description:
          'An ivory-white marble mausoleum on the south bank of the Yamuna River, universally admired as one of the Seven Wonders of the World and an eternal symbol of love.',
        category: 'Monument',
        pexelsQuery: 'taj mahal agra india',
      },
      {
        id: 'qutub-minar',
        name: 'Qutub Minar, New Delhi',
        description:
          'A 73-metre tall UNESCO World Heritage victory tower built in 1192, featuring intricate red sandstone carvings and historic Indo-Islamic architecture.',
        category: 'Landmark',
        pexelsQuery: 'qutub minar delhi',
      },
      {
        id: 'amer-fort',
        name: 'Amer Fort, Jaipur',
        description:
          'A grand hilltop fortress overlooking Maota Lake, famous for its artistic Hindu elements, majestic courtyards, and the sparkling Sheesh Mahal (Mirror Palace).',
        category: 'Palace',
        pexelsQuery: 'amber fort jaipur',
      },
      {
        id: 'varanasi-ghats',
        name: 'Varanasi Ghats & Ganges',
        description:
          'One of the world\'s oldest living cities, known for its sacred riverfront steps along the Ganges where evening Ganga Aarti rituals ignite spiritual wonder.',
        category: 'Culture',
        pexelsQuery: 'varanasi ghats ganges india',
      },
      {
        id: 'gateway-of-india',
        name: 'Gateway of India, Mumbai',
        description:
          'An iconic 20th-century arch monument overlooking the Arabian Sea, built to commemorate the landing of King George V and Queen Mary in 1911.',
        category: 'Monument',
        pexelsQuery: 'gateway of india mumbai',
      },
      {
        id: 'kerala-backwaters',
        name: 'Kerala Houseboat Backwaters',
        description:
          'A serene network of interconnected canals, rivers, and lakes lined with swaying coconut palms and traditional wooden kettuvallam houseboats.',
        category: 'Nature',
        pexelsQuery: 'kerala backwaters houseboat',
      },
    ],
  },
];

export const continents = ['All', 'Asia', 'Europe', 'North America', 'South America', 'Africa', 'Oceania'];
export const allTags = ['culture', 'food', 'beaches', 'nature', 'history', 'adventure', 'luxury', 'romance', 'art', 'nightlife', 'temples', 'urban', 'hiking', 'architecture'];
