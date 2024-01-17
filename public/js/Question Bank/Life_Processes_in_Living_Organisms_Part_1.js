const data = [
    {
      "question": "What is the primary function of the respiratory system in humans?",
      "options": ["Transport of oxygen", "Digestion of food", "Pumping blood", "Elimination of waste"],
      "correctAnswer": "Transport of oxygen",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 1
    },
    {
      "question": "Which organ is responsible for the production of insulin in the human body?",
      "options": ["Liver", "Pancreas", "Kidney", "Stomach"],
      "correctAnswer": "Pancreas",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 2
    },
    {
      "question": "What is the main function of the excretory system in humans?",
      "options": ["Respiration", "Blood circulation", "Waste elimination", "Food digestion"],
      "correctAnswer": "Waste elimination",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 3
    },
    {
      "question": "Which enzyme is responsible for the digestion of starch in the human digestive system?",
      "options": ["Lipase", "Amylase", "Trypsin", "Pepsin"],
      "correctAnswer": "Amylase",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 4
    },
    {
      "question": "What is the primary function of the circulatory system in humans?",
      "options": ["Respiration", "Transport of nutrients", "Excretion", "Nervous coordination"],
      "correctAnswer": "Transport of nutrients",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 5
    },
    {
      "question": "Which blood vessel carries oxygenated blood from the lungs to the heart?",
      "options": ["Pulmonary vein", "Aorta", "Pulmonary artery", "Superior vena cava"],
      "correctAnswer": "Pulmonary vein",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 6
    },
    {
      "question": "What is the primary function of the nervous system in living organisms?",
      "options": ["Transport of nutrients", "Hormone secretion", "Coordination of activities", "Gas exchange"],
      "correctAnswer": "Coordination of activities",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 7
    },
    {
      "question": "Which organ produces bile for the digestion of fats?",
      "options": ["Stomach", "Liver", "Pancreas", "Small intestine"],
      "correctAnswer": "Liver",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 8
    },
    {
      "question": "What is the function of the red blood cells in the human circulatory system?",
      "options": ["Carry oxygen", "Fight infection", "Clotting", "Digestion"],
      "correctAnswer": "Carry oxygen",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 9
    },
    {
      "question": "Which process involves the breakdown of glucose to release energy in cells?",
      "options": ["Photosynthesis", "Respiration", "Digestion", "Absorption"],
      "correctAnswer": "Respiration",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 10
    },
    {
      "question": "Explain the process of photosynthesis in plants and its significance.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 51
    },
    {
      "question": "Discuss the role of enzymes in the digestion of food in the human digestive system.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 52
    },
    {
      "question": "Explain the process of urine formation in the human excretory system.",
      "options": ["Limited explanation", "Extensive explanation", "No explanation", "Random explanation"],
      "correctAnswer": "Extensive explanation",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 53
    },
    {
      "question": "Discuss the structure and function of the human respiratory system.",
      "options": ["Limited function", "Extensive function", "No function", "Random function"],
      "correctAnswer": "Extensive function",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 54
    },
    {
      "question": "Explain the role of hormones in the regulation of various physiological processes.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 55
    },
    {
      "question": "Discuss the importance of maintaining a balance of water and electrolytes in the body.",
      "options": ["Limited importance", "Extensive importance", "No importance", "Random importance"],
      "correctAnswer": "Extensive importance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 56
    },
    {
      "question": "Explain the process of blood clotting and its significance in wound healing.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 57
    },
    {
      "question": "Discuss the structure and function of nephrons in the human kidney.",
      "options": ["Limited function", "Extensive function", "No function", "Random function"],
      "correctAnswer": "Extensive function",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 58
    },
    {
      "question": "Explain the concept of negative feedback in the regulation of physiological processes.",
      "options": ["Limited explanation", "Extensive explanation", "No explanation", "Random explanation"],
      "correctAnswer": "Extensive explanation",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 59
    },
    {
      "question": "Discuss the importance of the lymphatic system in the human body.",
      "options": ["Limited importance", "Extensive importance", "No importance", "Random importance"],
      "correctAnswer": "Extensive importance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 60
    },
    {
      "question": "Explain the role of the endocrine system in the coordination of various physiological processes.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 101
    },
    {
      "question": "Discuss the impact of smoking on the respiratory system and overall health.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 102
    },
    {
      "question": "Explain the concept of positive feedback in the regulation of physiological processes.",
      "options": ["Limited explanation", "Extensive explanation", "No explanation", "Random explanation"],
      "correctAnswer": "Extensive explanation",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 103
    },
    {
      "question": "Discuss the impact of alcohol consumption on the liver and overall health.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 104
    },
    {
      "question": "Explain the process of cellular respiration and its importance in living organisms.",
      "options": ["Limited importance", "Extensive importance", "No importance", "Random importance"],
      "correctAnswer": "Extensive importance",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 105
    },
    {
      "question": "Discuss the impact of diabetes on the endocrine system and overall health.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 106
    },
    {
      "question": "Explain the role of the immune system in protecting the body against infections.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 107
    },
    {
      "question": "Discuss the impact of malnutrition on various life processes in living organisms.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 108
    },
    {
      "question": "Explain the concept of homeostasis and its role in maintaining internal balance.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 109
    },
    {
      "question": "Discuss the impact of drug abuse on the nervous system and overall health.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
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