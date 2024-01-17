const data = [
    {
      "question": "What is the primary function of the mitochondria in a cell?",
      "options": ["Photosynthesis", "Cellular respiration", "Protein synthesis", "DNA replication"],
      "correctAnswer": "Cellular respiration",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 1
    },
    {
      "question": "Which molecule is commonly known as the 'energy currency' of the cell?",
      "options": ["Glucose", "ATP", "DNA", "RNA"],
      "correctAnswer": "ATP",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 2
    },
    {
      "question": "What is the function of ribosomes in a cell?",
      "options": ["Energy production", "Protein synthesis", "Cell division", "Lipid synthesis"],
      "correctAnswer": "Protein synthesis",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 3
    },
    {
      "question": "Which organelle is responsible for detoxifying harmful substances in the liver cells?",
      "options": ["Mitochondria", "Endoplasmic reticulum", "Golgi apparatus", "Lysosomes"],
      "correctAnswer": "Endoplasmic reticulum",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 4
    },
    {
      "question": "What is the main function of the Golgi apparatus in a cell?",
      "options": ["Protein synthesis", "Energy production", "Cellular respiration", "Packaging and secretion"],
      "correctAnswer": "Packaging and secretion",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 5
    },
    {
      "question": "Which cellular process involves the movement of molecules from an area of high concentration to low concentration?",
      "options": ["Osmosis", "Active transport", "Diffusion", "Facilitated diffusion"],
      "correctAnswer": "Diffusion",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 6
    },
    {
      "question": "What is the role of lysosomes in a cell?",
      "options": ["Cell division", "Digestion of waste", "Protein synthesis", "Photosynthesis"],
      "correctAnswer": "Digestion of waste",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 7
    },
    {
      "question": "Which process involves the release of energy from food molecules in the absence of oxygen?",
      "options": ["Fermentation", "Aerobic respiration", "Photosynthesis", "Glycolysis"],
      "correctAnswer": "Fermentation",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 8
    },
    {
      "question": "What is the function of the central vacuole in plant cells?",
      "options": ["Storage of water", "Protein synthesis", "Cell division", "Energy production"],
      "correctAnswer": "Storage of water",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 9
    },
    {
      "question": "Which process involves the production of gametes for sexual reproduction?",
      "options": ["Mitosis", "Meiosis", "Binary fission", "Budding"],
      "correctAnswer": "Meiosis",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 10
    },
    {
      "question": "Explain the process of DNA replication and its significance in cell division.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 51
    },
    {
      "question": "Discuss the structure and function of the cell membrane in cellular transport.",
      "options": ["Limited function", "Extensive function", "No function", "Random function"],
      "correctAnswer": "Extensive function",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 52
    },
    {
      "question": "Explain the role of the endomembrane system in the synthesis and transport of proteins.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 53
    },
    {
      "question": "Discuss the process of cellular respiration and its different stages.",
      "options": ["Limited stages", "Extensive stages", "No stages", "Random stages"],
      "correctAnswer": "Extensive stages",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 54
    },
    {
      "question": "Explain the concept of cell division and compare mitosis and meiosis.",
      "options": ["Limited comparison", "Extensive comparison", "No comparison", "Random comparison"],
      "correctAnswer": "Extensive comparison",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 55
    },
    {
      "question": "Discuss the role of microtubules in cell structure and movement.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 56
    },
    {
      "question": "Explain the process of protein synthesis and the role of RNA in the cell.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 57
    },
    {
      "question": "Discuss the role of ATP in cellular energy transfer and storage.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 58
    },
    {
      "question": "Explain the process of autophagy and its significance in cell maintenance.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 59
    },
    {
      "question": "Discuss the role of peroxisomes in cellular functions and detoxification.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 60
    },
    {
      "question": "Explain the concept of cell signaling and its role in coordinating cellular activities.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 101
    },
    {
      "question": "Discuss the impact of mutations on the structure and function of proteins in a cell.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 102
    },
    {
      "question": "Explain the process of exocytosis and its significance in cellular communication.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Difficult",
      " type": "Understand",
      "sublevel": 103
    },
    {
      "question": "Discuss the role of telomeres in cellular aging and cancer development.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 104
    },
    {
      "question": "Explain the process of meiotic recombination and its significance in genetic diversity.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 105
    },
    {
      "question": "Discuss the role of stem cells in tissue regeneration and medical applications.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 106
    },
    {
      "question": "Explain the concept of apoptosis and its role in normal development and disease prevention.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 107
    },
    {
      "question": "Discuss the role of microRNAs in the regulation of gene expression in a cell.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 108
    },
    {
      "question": "Explain the process of cellular senescence and its implications in aging and disease.",
      "options": ["Limited implications", "Extensive implications", "No implications", "Random implications"],
      "correctAnswer": "Extensive implications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 109
    },
    {
      "question": "Discuss the challenges and ethical considerations in genetic engineering and gene editing.",
      "options": ["Limited considerations", "Extensive considerations", "No considerations", "Random considerations"],
      "correctAnswer": "Extensive considerations",
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