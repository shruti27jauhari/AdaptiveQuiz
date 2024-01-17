const data = [
    {
      "question": "What is the main focus of microbiology?",
      "options": ["Study of plants", "Study of microorganisms", "Study of weather patterns", "Study of human behavior"],
      "correctAnswer": "Study of microorganisms",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 1
    },
    {
      "question": "Which microscope is commonly used to observe bacteria and other small microorganisms?",
      "options": ["Telescope", "Electron microscope", "Compound microscope", "Reflecting telescope"],
      "correctAnswer": "Compound microscope",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 2
    },
    {
      "question": "What is the term for microorganisms that cause disease?",
      "options": ["Beneficial microorganisms", "Pathogenic microorganisms", "Neutral microorganisms", "Inert microorganisms"],
      "correctAnswer": "Pathogenic microorganisms",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 3
    },
    {
      "question": "Which scientist is known as the 'Father of Microbiology'?",
      "options": ["Louis Pasteur", "Robert Koch", "Anton van Leeuwenhoek", "Joseph Lister"],
      "correctAnswer": "Anton van Leeuwenhoek",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 4
    },
    {
      "question": "What is the primary role of microorganisms in the process of fermentation?",
      "options": ["Produce oxygen", "Produce alcohol", "Break down waste", "Generate electricity"],
      "correctAnswer": "Produce alcohol",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 5
    },
    {
      "question": "Which type of microorganism is involved in the production of antibiotics like penicillin?",
      "options": ["Viruses", "Bacteria", "Fungi", "Protozoa"],
      "correctAnswer": "Fungi",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 6
    },
    {
      "question": "What is the process by which bacteria reproduce by dividing into two identical cells?",
      "options": ["Binary fission", "Mitosis", "Meiosis", "Budding"],
      "correctAnswer": "Binary fission",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 7
    },
    {
      "question": "Which microorganisms are used in the production of yogurt and cheese?",
      "options": ["Bacteria", "Viruses", "Fungi", "Protozoa"],
      "correctAnswer": "Bacteria",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 8
    },
    {
      "question": "What is the term for the study of the body's immune system and its responses to microorganisms?",
      "options": ["Virology", "Immunology", "Parasitology", "Mycology"],
      "correctAnswer": "Immunology",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 9
    },
    {
      "question": "Which microorganism is responsible for causing malaria?",
      "options": ["Bacteria", "Virus", "Fungus", "Protozoa"],
      "correctAnswer": "Protozoa",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 10
    },
    {
      "question": "Explain the difference between prokaryotic and eukaryotic microorganisms.",
      "options": ["Limited difference", "Extensive difference", "No difference", "Random difference"],
      "correctAnswer": "Extensive difference",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 51
    },
    {
      "question": "Discuss the significance of microorganisms in the nitrogen cycle.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 52
    },
    {
      "question": "Explain the process of antibiotic resistance in bacteria and its implications for human health.",
      "options": ["Limited implications", "Extensive implications", "No implications", "Random implications"],
      "correctAnswer": "Extensive implications",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 53
    },
    {
      "question": "Discuss the role of microorganisms in bioremediation and environmental cleanup.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 54
    },
    {
      "question": "Explain the concept of Koch's postulates and their application in identifying the cause of infectious diseases.",
      "options": ["Limited application", "Extensive application", "No application", "Random application"],
      "correctAnswer": "Extensive application",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 55
    },
    {
      "question": "Discuss the role of microorganisms in the production of biofuels and their potential as a renewable energy source.",
      "options": ["Limited potential", "Extensive potential", "No potential", "Random potential"],
      "correctAnswer": "Extensive potential",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 56
    },
    {
      "question": "Explain the process of gene editing using CRISPR-Cas9 and its applications in microbiology.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 57
    },
    {
      "question": "Discuss the role of microorganisms in the human digestive system and their impact on health.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 58
    },
    {
      "question": "Explain the process of pasteurization and its significance in food preservation.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 59
    },
    {
      "question": "Discuss the role of microorganisms in the production of antibiotics and their impact on medicine.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 60
    },
    {
      "question": "Explain the concept of quorum sensing in bacteria and its role in regulating microbial behaviors.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 101
    },
    {
      "question": "Discuss the potential applications of nanotechnology in microbiology.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 102
    },
    {
      "question": "Explain the concept of horizontal gene transfer in bacteria and its implications for evolution.",
      "options": ["Limited implications", "Extensive implications", "No implications", "Random implications"],
      "correctAnswer": "Extensive implications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 103
    },
    {
      "question": "Discuss the challenges and ethical considerations in the use of genetically modified microorganisms.",
      "options": ["Limited considerations", "Extensive considerations", "No considerations", "Random considerations"],
      "correctAnswer": "Extensive considerations",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 104
    },
    {
      "question": "Explain the role of microorganisms in the biogeochemical cycling of elements in ecosystems.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 105
    },
    {
      "question": "Discuss the potential risks and benefits of using bacteriophages in the treatment of bacterial infections.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 106
    },
    {
      "question": "Explain the concept of microbial bioreporters and their applications in environmental monitoring.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 107
    },
    {
      "question": "Discuss the role of microorganisms in the degradation of pollutants and their potential in bioremediation.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 108
    },
    {
      "question": "Explain the concept of microbial fuel cells and their potential as a sustainable energy source.",
      "options": ["Limited potential", "Extensive potential", "No potential", "Random potential"],
      "correctAnswer": "Extensive potential",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 109
    },
    {
      "question": "Discuss the challenges and advancements in the field of synthetic biology in the context of microorganisms.",
      "options": ["Limited advancements", "Extensive advancements", "No advancements", "Random advancements"],
      "correctAnswer": "Extensive advancements",
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