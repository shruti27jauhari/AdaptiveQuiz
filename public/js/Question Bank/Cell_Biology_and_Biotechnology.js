const data = [
    {
      "question": "What is the basic structural and functional unit of all living organisms?",
      "options": ["Atom", "Cell", "Molecule", "Tissue"],
      "correctAnswer": "Cell",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 1
    },
    {
      "question": "Which organelle is responsible for the production of energy in a cell?",
      "options": ["Nucleus", "Mitochondrion", "Endoplasmic reticulum", "Golgi apparatus"],
      "correctAnswer": "Mitochondrion",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 2
    },
    {
      "question": "What is the control center of the cell that contains genetic material?",
      "options": ["Mitochondrion", "Endoplasmic reticulum", "Nucleus", "Golgi apparatus"],
      "correctAnswer": "Nucleus",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 3
    },
    {
      "question": "Which type of cell division results in the formation of gametes (sperm and egg cells)?",
      "options": ["Mitosis", "Meiosis", "Binary fission", "Budding"],
      "correctAnswer": "Meiosis",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 4
    },
    {
      "question": "What is the process by which cells engulf and digest particles or other cells?",
      "options": ["Exocytosis", "Phagocytosis", "Pinocytosis", "Osmosis"],
      "correctAnswer": "Phagocytosis",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 5
    },
    {
      "question": "Which structure is responsible for the synthesis of proteins in a cell?",
      "options": ["Nucleus", "Mitochondrion", "Ribosome", "Golgi apparatus"],
      "correctAnswer": "Ribosome",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 6
    },
    {
      "question": "What is the term for the protective outer covering of a plant cell?",
      "options": ["Cell wall", "Cell membrane", "Cytoplasm", "Nuclear envelope"],
      "correctAnswer": "Cell wall",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 7
    },
    {
      "question": "Which organelle is responsible for the synthesis of lipids and detoxification of drugs in a cell?",
      "options": ["Mitochondrion", "Endoplasmic reticulum", "Nucleus", "Golgi apparatus"],
      "correctAnswer": "Endoplasmic reticulum",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 8
    },
    {
      "question": "What is the term for the process by which cells release substances outside the cell?",
      "options": ["Endocytosis", "Exocytosis", "Phagocytosis", "Osmosis"],
      "correctAnswer": "Exocytosis",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 9
    },
    {
      "question": "Which cellular structure is responsible for maintaining cell shape and providing structural support?",
      "options": ["Mitochondrion", "Cytoskeleton", "Ribosome", "Endoplasmic reticulum"],
      "correctAnswer": "Cytoskeleton",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 10
    },
    {
      "question": "Explain the difference between a prokaryotic cell and a eukaryotic cell.",
      "options": ["Limited difference", "Extensive difference", "No difference", "Random difference"],
      "correctAnswer": "Extensive difference",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 51
    },
    {
      "question": "Discuss the process of mitosis and its role in cell division.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 52
    },
    {
      "question": "Explain the significance of the cell membrane in maintaining cellular homeostasis.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 53
    },
    {
      "question": "Discuss the role of the Golgi apparatus in the processing and packaging of cellular products.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 54
    },
    {
      "question": "Explain the process of DNA replication and its significance in cellular functions.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 55
    },
    {
      "question": "Discuss the structure and functions of chloroplasts in plant cells.",
      "options": ["Limited functions", "Extensive functions", "No functions", "Random functions"],
      "correctAnswer": "Extensive functions",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 56
    },
    {
      "question": "Explain the process of cellular respiration and its importance in producing energy for cells.",
      "options": ["Limited importance", "Extensive importance", "No importance", "Random importance"],
      "correctAnswer": "Extensive importance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 57
    },
    {
      "question": "Discuss the role of cell communication in coordinating cellular activities.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 58
    },
    {
      "question": "Explain the concept of stem cells and their potential applications in medicine.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 59
    },
    {
      "question": "Discuss the process of transcription and translation in protein synthesis.",
      "options": ["Limited process", "Extensive process", "No process", "Random process"],
      "correctAnswer": "Extensive process",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 60
    },
    {
      "question": "Explain the role of telomeres in cellular aging and senescence.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 101
    },
    {
      "question": "Discuss the process of apoptosis and its significance in maintaining cellular homeostasis.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 102
    },
    {
      "question": "Explain the concept of cell differentiation and its role in development and tissue specialization.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 103
    },
    {
      "question": "Discuss the challenges and ethical considerations in cloning and genetic engineering.",
      "options": ["Limited considerations", "Extensive considerations", "No considerations", "Random considerations"],
      "correctAnswer": "Extensive considerations",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 104
    },
    {
      "question": "Explain the process of endocytosis and its various forms in cellular uptake of substances.",
      "options": ["Limited forms", "Extensive forms", "No forms", "Random forms"],
      "correctAnswer": "Extensive forms",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 105
    },
    {
      "question": "Discuss the applications and ethical implications of gene editing technologies like CRISPR-Cas9.",
      "options": ["Limited implications", "Extensive implications", "No implications", "Random implications"],
      "correctAnswer": "Extensive implications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 106
    },
    {
      "question": "Explain the concept of synthetic biology and its potential impact on cellular engineering.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 107
    },
    {
      "question": "Discuss the challenges and future prospects of using nanotechnology in cell biology.",
      "options": ["Limited prospects", "Extensive prospects", "No prospects", "Random prospects"],
      "correctAnswer": "Extensive prospects",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 108
    },
    {
      "question": "Explain the role of cell signaling in the development of diseases such as cancer.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 109
    },
    {
      "question": "Discuss the potential applications of CRISPR technology in modifying human germline cells.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
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