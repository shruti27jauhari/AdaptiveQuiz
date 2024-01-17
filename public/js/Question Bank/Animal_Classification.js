const data = [
    {
      "question": "Which category of animals includes mammals, birds, and reptiles?",
      "options": ["Invertebrates", "Amphibians", "Vertebrates", "Arthropods"],
      "correctAnswer": "Vertebrates",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 1
    },
    {
      "question": "What is the main characteristic of animals in the class Mammalia?",
      "options": ["Feathers", "Hair or fur", "Scales", "Exoskeleton"],
      "correctAnswer": "Hair or fur",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 2
    },
    {
      "question": "Which group of animals includes animals like frogs and salamanders?",
      "options": ["Reptiles", "Mammals", "Amphibians", "Birds"],
      "correctAnswer": "Amphibians",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 3
    },
    {
      "question": "What is the primary characteristic of animals in the class Aves?",
      "options": ["Scales", "Feathers", "Hair or fur", "Shell"],
      "correctAnswer": "Feathers",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 4
    },
    {
      "question": "Which class of animals includes snakes, turtles, and crocodiles?",
      "options": ["Mammalia", "Aves", "Reptilia", "Amphibia"],
      "correctAnswer": "Reptilia",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 5
    },
    {
      "question": "What is the main characteristic of animals in the class Insecta?",
      "options": ["Two pairs of wings", "No wings", "Four pairs of wings", "Feathers"],
      "correctAnswer": "Six legs",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 6
    },
    {
      "question": "Which phylum includes animals with a segmented body and an exoskeleton?",
      "options": ["Chordata", "Mollusca", "Arthropoda", "Annelida"],
      "correctAnswer": "Arthropoda",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 7
    },
    {
      "question": "What is the primary characteristic of animals in the class Chondrichthyes?",
      "options": ["Bony skeleton", "Cartilaginous skeleton", "Shell", "Endoskeleton"],
      "correctAnswer": "Cartilaginous skeleton",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 8
    },
    {
      "question": "Which group of animals is characterized by having a notochord, dorsal hollow nerve cord, and pharyngeal slits?",
      "options": ["Arachnids", "Chordates", "Echinoderms", "Cnidarians"],
      "correctAnswer": "Chordates",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 9
    },
    {
      "question": "What is the primary characteristic of animals in the class Osteichthyes?",
      "options": ["Bony skeleton", "Cartilaginous skeleton", "Feathers", "Endoskeleton"],
      "correctAnswer": "Bony skeleton",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 10
    },
    {
      "question": "Explain the difference between warm-blooded and cold-blooded animals with examples.",
      "options": ["Limited difference", "Extensive difference", "No difference", "Random difference"],
      "correctAnswer": "Extensive difference",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 51
    },
    {
      "question": "Discuss the adaptations of animals in the class Aves for flight.",
      "options": ["Limited adaptations", "Extensive adaptations", "No adaptations", "Random adaptations"],
      "correctAnswer": "Extensive adaptations",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 52
    },
    {
      "question": "Explain the process of metamorphosis in insects and its significance in their life cycle.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 53
    },
    {
      "question": "Discuss the characteristics and examples of animals in the phylum Mollusca.",
      "options": ["Limited characteristics", "Extensive characteristics", "No characteristics", "Random characteristics"],
      "correctAnswer": "Extensive characteristics",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 54
    },
    {
      "question": "Explain the importance of the notochord in the development of chordates.",
      "options": ["Limited importance", "Extensive importance", "No importance", "Random importance"],
      "correctAnswer": "Extensive importance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 55
    },
    {
      "question": "Discuss the characteristics and examples of animals in the phylum Echinodermata.",
      "options": ["Limited characteristics", "Extensive characteristics", "No characteristics", "Random characteristics"],
      "correctAnswer": "Extensive characteristics",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 56
    },
    {
      "question": "Explain the process of molting in arthropods and its significance in their growth.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 57
    },
    {
      "question": "Discuss the characteristics and examples of animals in the phylum Annelida.",
      "options": ["Limited characteristics", "Extensive characteristics", "No characteristics", "Random characteristics"],
      "correctAnswer": "Extensive characteristics",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 58
    },
    {
      "question": "Explain the concept of symbiosis in the animal kingdom and provide examples.",
      "options": ["Limited examples", "Extensive examples", "No examples", "Random examples"],
      "correctAnswer": "Extensive examples",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 59
    },
    {
      "question": "Discuss the characteristics and examples of animals in the phylum Arthropoda.",
      "options": ["Limited characteristics", "Extensive characteristics", "No characteristics", "Random characteristics"],
      "correctAnswer": "Extensive characteristics",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 60
    },
    {
      "question": "Explain the concept of convergent evolution in the context of animal classification.",
      "options": ["Limited concept", "Extensive concept", "No concept", "Random concept"],
      "correctAnswer": "Extensive concept",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 101
    },
    {
      "question": "Discuss the characteristics and adaptations of animals in extreme environments, such as deep-sea habitats.",
      "options": ["Limited characteristics", "Extensive characteristics", "No characteristics", "Random characteristics"],
      "correctAnswer": "Extensive characteristics",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 102
    },
    {
      "question": "Explain the process of coevolution between species and its impact on their respective adaptations.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 103
    },
    {
      "question": "Discuss the characteristics and examples of animals in the phylum Cnidaria.",
      "options": ["Limited characteristics", "Extensive characteristics", "No characteristics", "Random characteristics"],
      "correctAnswer": "Extensive characteristics",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 104
    },
    {
      "question": "Explain the concept of bioluminescence in marine organisms and its ecological significance.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 105
    },
    {
      "question": "Discuss the role of mimicry in the survival strategies of certain animal species.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 106
    },
    {
      "question": "Explain the concept of a keystone species in an ecosystem and its impact on biodiversity.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 107
    },
    {
      "question": "Discuss the characteristics and adaptations of animals in the class Chondrichthyes.",
      "options": ["Limited characteristics", "Extensive characteristics", "No characteristics", "Random characteristics"],
      "correctAnswer": "Extensive characteristics",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 108
    },
    {
      "question": "Explain the concept of a flagship species in conservation and its role in raising awareness.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 109
    },
    {
      "question": "Discuss the characteristics and examples of animals in the class Osteichthyes.",
      "options": ["Limited characteristics", "Extensive characteristics", "No characteristics", "Random characteristics"],
      "correctAnswer": "Extensive characteristics",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 110
    }
  ]
  
function convertSublevel(sublevel) {
    if (sublevel >= 51 && sublevel <= 60) {
        return (sublevel - 40).toString();
    } else if (sublevel >= 101 && sublevel <= 110) {
        return (sublevel - 80).toString();
    } else {
        return sublevel.toString();
    }
}

// Updating sublevel values in the data
const updatedData = data.map(entry => ({ ...entry, sublevel: convertSublevel(entry.sublevel) }));
console.log(updatedData);

export default updatedData;