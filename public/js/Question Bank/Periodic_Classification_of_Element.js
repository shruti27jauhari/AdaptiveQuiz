const data = [
    {
      "question": "Which scientist is credited with the development of the periodic table?",
      "options": ["Isaac Newton", "Dmitri Mendeleev", "Marie Curie", "Albert Einstein"],
      "correctAnswer": "Dmitri Mendeleev",
      "level": "Easy",
      "type": "Remember",
      "sublevel": '1'
    },
    {
      "question": "What is the atomic number of an element?",
      "options": ["Number of neutrons", "Number of protons", "Number of electrons", "Mass number"],
      "correctAnswer": "Number of protons",
      "level": "Easy",
      "type": "Remember",
      "sublevel": '2'
    },
    {
      "question": "In the periodic table, elements in the same ______ have similar chemical properties.",
      "options": ["Period", "Group", "Block", "Family"],
      "correctAnswer": "Group",
      "level": "Easy",
      "type": "Remember",
      "sublevel": '3'
    },
    {
      "question": "Which element is a noble gas and has the atomic number 10?",
      "options": ["Helium", "Neon", "Argon", "Krypton"],
      "correctAnswer": "Neon",
      "level": "Easy",
      "type": "Remember",
      "sublevel": '4'
    },
    {
      "question": "What is the significance of the periodic law in the arrangement of elements?",
      "options": ["Arranges by atomic mass", "Arranges by atomic number", "Arranges by melting point", "Arranges by density"],
      "correctAnswer": "Arranges by atomic number",
      "level": "Easy",
      "type": "Understand",
      "sublevel": '5'
    },
    {
      "question": "What is the relationship between the period number and the principal energy level of an element?",
      "options": ["Directly proportional", "Inversely proportional", "No relationship", "Random"],
      "correctAnswer": "Directly proportional",
      "level": "Easy",
      "type": "Understand",
      "sublevel": '6'
    },
    {
      "question": "Explain the term 'atomic radius' and its variation in periodic trends.",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Increases",
      "level": "Easy",
      "type": "Understand",
      "sublevel": '7'
    },
    {
      "question": "What is the trend in metallic character as you move down a group in the periodic table?",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Increases",
      "level": "Easy",
      "type": "Understand",
      "sublevel": '8'
    },
    {
      "question": "Discuss the concept of valence electrons and their importance in chemical reactions.",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Increases",
      "level": "Easy",
      "type": "Understand",
      "sublevel": '9'
    },
    {
      "question": "Explain the role of the periodic table in predicting the properties of elements.",
      "options": ["Predictable pattern", "Random pattern", "No pattern", "Constant pattern"],
      "correctAnswer": "Predictable pattern",
      "level": "Easy",
      "type": "Understand",
      "sublevel": '10'
    },
    {
      "question": "Explain the trends in atomic size as you move across a period in the periodic table.",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Decreases",
      "level": "Medium",
      "type": "Understand",
      "sublevel": '11'
    },
    {
      "question": "Discuss the concept of ionization energy in the periodic table.",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Increases",
      "level": "Medium",
      "type": "Understand",
      "sublevel": '12'
    },
    {
      "question": "Define electronegativity and its variation in periodic trends.",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Increases",
      "level": "Medium",
      "type": "Remember",
      "sublevel": '13'
    },
    {
      "question": "Explain the periodic trends in the metallic character of elements.",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Decreases",
      "level": "Medium",
      "type": "Understand",
      "sublevel": '14'
    },
    {
      "question": "Discuss the concept of electron affinity in the periodic table.",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Increases",
      "level": "Medium",
      "type": "Understand",
      "sublevel": '15'
    },
    {
      "question": "Explain the concept of effective nuclear charge and its impact on periodic trends.",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Increases",
      "level": "Medium",
      "type": "Understand",
      "sublevel": '16'
    },
    {
      "question": "Discuss the trends in atomic size as you move down a group in the periodic table.",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Increases",
      "level": "Medium",
      "type": "Understand",
      "sublevel": '17'
    },
    {
      "question": "Explain the concept of shielding effect and its role in periodic trends.",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Increases",
      "level": "Medium",
      "type": "Understand",
      "sublevel": '18'
    },
    {
      "question": "Discuss the trends in ionization energy as you move down a group in the periodic table.",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Decreases",
      "level": "Medium",
      "type": "Understand",
      "sublevel": '19'
    },
    {
      "question": "What is the trend in metallic character as you move across a period in the periodic table?",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Decreases",
      "level": "Medium",
      "type": "Understand",
      "sublevel": '20'
    },
    {
      "question": "Explain the exceptions to the periodic trends observed in the periodic table.",
      "options": ["Rarely observed", "Commonly observed", "No exceptions", "Random exceptions"],
      "correctAnswer": "Random exceptions",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": '21'
    },
    {
      "question": "Discuss the role of lanthanides and actinides in the periodic table.",
      "options": ["Transition metals", "Noble gases", "Alkali metals", "Alkaline earth metals"],
      "correctAnswer": "Transition metals",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": '22'
    },
    {
      "question": "Explain the concept of effective nuclear charge and its impact on periodic trends.",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Increases",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": '23'
    },
    {
      "question": "Discuss the trends in metallic and non-metallic character in the periodic table.",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Decreases",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": '24'
    },
    {
      "question": "Explain the concept of periodicity in the properties of elements.",
      "options": ["Predictable pattern", "Random pattern", "No pattern", "Constant pattern"],
      "correctAnswer": "Predictable pattern",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": '25'
    },
    {
      "question": "Discuss the theoretical and practical applications of the periodic table in chemistry.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": '26'
    },
    {
      "question": "Explain the concept of periodic law and its exceptions in certain elements.",
      "options": ["No exceptions", "Common exceptions", "Rare exceptions", "Random exceptions"],
      "correctAnswer": "Rare exceptions",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": '27'
    },
    {
      "question": "Discuss the trends in atomic size and ionization energy for elements in the same period.",
      "options": ["Direct correlation", "Inverse correlation", "No correlation", "Random correlation"],
      "correctAnswer": "Inverse correlation",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": '28'
    },
    {
      "question": "Explain the concept of isoelectronic species and their occurrence in the periodic table.",
      "options": ["Rare occurrence", "Common occurrence", "No occurrence", "Random occurrence"],
      "correctAnswer": "Common occurrence",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": '29'
    },
    {
      "question": "Discuss the significance of the periodic table in modern chemical research and technology.",
      "options": ["Limited significance", "High significance", "No significance", "Random significance"],
      "correctAnswer": "High significance",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": '30'
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
const chapter2 = data.map(entry => ({ ...entry, sublevel: convertSublevel(entry.sublevel) }));
console.log(chapter2);

export default chapter2;