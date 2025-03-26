// Clues data by category, difficulty, and word
const cluesData = {
  animals: {
    easy: {
      DOG: [
        "Man's best friend",
        "Comes in many breeds like Golden Retriever and Poodle",
        "Often wags its tail when happy"
      ],
      CAT: [
        "Domestic pet that purrs",
        "Ancient Egyptians worshipped these animals",
        "Often seen chasing mice in cartoons"
      ],
      COW: [
        "Produces milk for humans",
        "Makes a 'moo' sound",
        "Sacred animal in India"
      ],
      PIG: [
        "Farm animal with a curly tail",
        "Known for rolling in mud",
        "Source of bacon and ham"
      ],
      FOX: [
        "Clever wild canine with a bushy tail",
        "Main character in Aesop's fables",
        "Has reddish-orange fur"
      ],
      BIRD: [
        "Has feathers and wings",
        "Most species can fly",
        "Lays eggs in nests"
      ],
      FISH: [
        "Lives underwater and breathes through gills",
        "Has scales and fins",
        "Often kept in aquariums as pets"
      ]
    },
    medium: {
      KOALA: [
        "Australian marsupial",
        "Eats eucalyptus leaves",
        "Sleeps up to 20 hours a day"
      ],
      WOMBAT: [
        "Marsupial that digs burrows",
        "Native to Australia",
        "Has cube-shaped droppings"
      ],
      DINGO: [
        "Wild Australian canine",
        "Famous for a controversy involving a baby",
        "Australia's largest terrestrial predator"
      ],
      POSSUM: [
        "Nocturnal marsupial",
        "Plays dead when threatened",
        "Has a prehensile tail"
      ],
      PARROT: [
        "Colorful bird that can mimic human speech",
        "Has a curved beak",
        "Some species live for over 50 years"
      ],
      LIZARD: [
        "Cold-blooded reptile",
        "Many species can regrow their tails",
        "Changes color in some species"
      ]
    },
    hard: {
      PLATYPUS: [
        "Egg-laying mammal",
        "Has a duck-like bill",
        "Males have venomous spurs",
        "Native to eastern Australia"
      ],
      KANGAROO: [
        "Marsupial with powerful hind legs",
        "Carries young in a pouch",
        "Symbol of Australia",
        "Moves by hopping"
      ],
      CASSOWARY: [
        "Large flightless bird",
        "Has a casque on its head",
        "Considered one of the most dangerous birds",
        "Native to tropical forests of Australia"
      ],
      KOOKABURRA: [
        "Bird known for its laughing call",
        "Member of the kingfisher family",
        "Native to Australia and New Guinea",
        "Featured in a popular Australian children's song"
      ],
      TASMANIAN: [
        "Refers to animals from an Australian island state",
        "Famous extinct marsupial carnivore",
        "Cartoon character based on this animal spins rapidly",
        "Devil is part of its common name"
      ]
    }
  },
  countries: {
    easy: {
      USA: [
        "Land of the free, home of the brave",
        "Has 50 stars on its flag",
        "Where Hollywood is located"
      ],
      PERU: [
        "South American country",
        "Home to Machu Picchu",
        "Capital is Lima"
      ],
      CUBA: [
        "Caribbean island nation",
        "Known for cigars and rum",
        "Capital is Havana"
      ],
      ITALY: [
        "Boot-shaped country",
        "Known for pizza and pasta",
        "Home of the Roman Empire"
      ],
      SPAIN: [
        "European country on the Iberian Peninsula",
        "Known for flamenco dancing",
        "Has a royal family"
      ],
      CHINA: [
        "Most populous country in the world",
        "Built a Great Wall",
        "Home to giant pandas"
      ]
    },
    medium: {
      BRAZIL: [
        "Largest country in South America",
        "Famous for Carnival celebration",
        "Home of the Amazon Rainforest"
      ],
      CANADA: [
        "Second-largest country by land area",
        "Known for maple syrup",
        "Has French and English as official languages"
      ],
      MEXICO: [
        "Country south of the USA",
        "Known for tacos and mariachi music",
        "Home of ancient Aztec and Maya civilizations"
      ],
      FRANCE: [
        "European country known for fashion",
        "Has the Eiffel Tower",
        "Known for fine wines and cheeses"
      ],
      RUSSIA: [
        "Largest country by land area",
        "Spans Europe and Asia",
        "Known for ballet and matryoshka dolls"
      ],
      JAPAN: [
        "Island nation in East Asia",
        "Land of the rising sun",
        "Known for sushi and samurai"
      ]
    },
    hard: {
      AUSTRALIA: [
        "Island continent in the Southern Hemisphere",
        "Home to kangaroos and koalas",
        "Has the Great Barrier Reef",
        "Capital is Canberra, not Sydney"
      ],
      SINGAPORE: [
        "City-state in Southeast Asia",
        "Known for strict laws and cleanliness",
        "Has a famous airport with indoor waterfall",
        "One of the world's major financial centers"
      ],
      ARGENTINA: [
        "South American country",
        "Known for tango dancing",
        "Home to the Pampas grasslands",
        "Shares Iguazu Falls with Brazil"
      ],
      SWITZERLAND: [
        "Landlocked European country",
        "Known for chocolate and watches",
        "Has four official languages",
        "Remains neutral in wars"
      ],
      INDONESIA: [
        "Largest archipelago in the world",
        "Home to Komodo dragons",
        "Has the world's largest Muslim population",
        "Bali is one of its islands"
      ]
    }
  },
  food: {
    easy: {
      MEAT: [
        "Animal flesh eaten as food",
        "Includes beef, pork, and chicken",
        "Major protein source in many diets"
      ],
      RICE: [
        "Grain that feeds more than half the world",
        "Grown in paddy fields",
        "Staple food in Asian cuisines"
      ],
      FISH: [
        "Aquatic animal often eaten for omega-3 fatty acids",
        "Can be served raw in sushi",
        "Usually cooked by grilling, baking, or frying"
      ],
      CAKE: [
        "Sweet baked dessert",
        "Often served at birthdays",
        "Typically made with flour, sugar, and eggs"
      ],
      MILK: [
        "White liquid produced by mammals",
        "Used to make cheese and yogurt",
        "Good source of calcium"
      ],
      EGGS: [
        "Common breakfast food",
        "Come from chickens",
        "Can be scrambled, fried, or boiled"
      ]
    },
    medium: {
      BURGER: [
        "Popular fast food sandwich",
        "Usually has a meat patty between buns",
        "Named after a German city"
      ],
      PIZZA: [
        "Italian dish with dough, sauce, and toppings",
        "Often delivered in a cardboard box",
        "Hawaiian version controversially includes pineapple"
      ],
      PASTA: [
        "Italian food made from durum wheat",
        "Comes in many shapes like spaghetti and penne",
        "Usually served with sauce"
      ],
      SUSHI: [
        "Japanese dish often containing raw fish",
        "Made with vinegared rice",
        "Often served with wasabi and soy sauce"
      ],
      SALAD: [
        "Dish of mixed vegetables",
        "Often dressed with oil and vinegar",
        "Can be a side dish or main course"
      ],
      STEAK: [
        "Cut of meat, usually beef",
        "Graded by marbling and tenderness",
        "Can be rare, medium, or well-done"
      ]
    },
    hard: {
      VEGEMITE: [
        "Australian food spread",
        "Made from leftover brewers' yeast extract",
        "Dark brown and very salty",
        "Mentioned in a popular song by Men At Work"
      ],
      LAMINGTON: [
        "Australian dessert",
        "Sponge cake dipped in chocolate",
        "Coated in desiccated coconut",
        "Named after a former Governor of Queensland"
      ],
      PAVLOVA: [
        "Dessert claimed by both Australia and New Zealand",
        "Meringue-based cake",
        "Topped with fruit and whipped cream",
        "Named after a Russian ballerina"
      ],
      "MEAT PIE": [
        "Popular Australian snack",
        "Pastry filled with minced meat and gravy",
        "Often eaten at sporting events",
        "Sometimes topped with tomato sauce"
      ],
      "ANZAC BISCUIT": [
        "Traditional Australian cookie",
        "Made with oats and golden syrup",
        "Associated with World War I",
        "Named after Australia and New Zealand Army Corps"
      ]
    }
  },
  aussie: {
    easy: {
      MATE: [
        "Australian term for a friend",
        "Used commonly in greeting",
        "Similar to 'buddy' or 'pal'"
      ],
      GDAY: [
        "Australian greeting",
        "Shortened version of 'Good day'",
        "Often followed by 'mate'"
      ],
      ARVO: [
        "Australian slang for afternoon",
        "As in 'See you this arvo'",
        "Typical example of shortening words"
      ],
      BARBIE: [
        "Not a doll in Australia",
        "Used for outdoor cooking",
        "Put another shrimp on this"
      ],
      LOLLY: [
        "Australian term for candy",
        "Not referring to a pop",
        "Often in a bag from a shop"
      ],
      BREKKIE: [
        "First meal of the day",
        "Australian slang for morning meal",
        "Might include Vegemite toast"
      ]
    },
    medium: {
      STUBBY: [
        "Australian term for a beer bottle",
        "Short and wide shape",
        "Often kept cold in an esky"
      ],
      THONGS: [
        "Not underwear in Australia",
        "Worn on feet",
        "Called 'flip-flops' in other countries"
      ],
      DUNNY: [
        "Australian slang for toilet",
        "Especially an outdoor toilet",
        "Originally referred to an outhouse"
      ],
      ESKY: [
        "Australian term for cooler",
        "Keeps drinks cold",
        "Essential for a day at the beach"
      ],
      FOOTY: [
        "Australian slang for football",
        "Usually refers to Australian Rules Football",
        "Popular sport with oval ball"
      ],
      MOZZIE: [
        "Australian slang for a flying pest",
        "Bites and can cause itching",
        "Short for mosquito"
      ]
    },
    hard: {
      "FAIR DINKUM": [
        "Australian expression for something genuine",
        "Means 'honest' or 'true'",
        "Used to express authenticity",
        "Can be a question or statement"
      ],
      STREWTH: [
        "Australian exclamation of surprise",
        "Mild oath or expression of amazement",
        "Derived from 'God's truth'",
        "Old-fashioned but still recognized"
      ],
      DRONGO: [
        "Australian slang for a stupid person",
        "Named after a horse that never won a race",
        "Used affectionately or as an insult",
        "Example: 'Don't be such a drongo'"
      ],
      CRIKEY: [
        "Australian exclamation of surprise",
        "Made famous by Steve Irwin",
        "Similar to 'wow' or 'gosh'",
        "Expression of astonishment"
      ],
      SHEILA: [
        "Old Australian slang term",
        "Refers to a woman",
        "Equivalent to 'guy' but for females",
        "Less commonly used now"
      ],
      COBBER: [
        "Australian slang for friend",
        "Old-fashioned term",
        "Similar to 'mate' or 'pal'",
        "Term of endearment"
      ]
    }
  }
};

export default cluesData;