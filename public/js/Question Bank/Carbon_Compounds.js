const data = [
    {
      "question": "What is the simplest hydrocarbon consisting of only single bonds?",
      "options": ["Methane", "Ethane", "Propane", "Butane"],
      "correctAnswer": "Methane",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 1
    },
    {
      "question": "Which functional group characterizes alcohols?",
      "options": ["-OH", "-CHO", "-COOH", "-NH2"],
      "correctAnswer": "-OH",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 2
    },
    {
      "question": "What is the general formula for alkynes?",
      "options": ["CnH2n+2", "CnH2n", "CnH2n-2", "CnH2n-4"],
      "correctAnswer": "CnH2n-2",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 3
    },
    {
      "question": "Which is the simplest aromatic hydrocarbon?",
      "options": ["Benzene", "Toluene", "Xylene", "Ethylbenzene"],
      "correctAnswer": "Benzene",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 4
    },
    {
      "question": "What is the name of the functional group in carboxylic acids?",
      "options": ["-OH", "-CHO", "-COOH", "-NH2"],
      "correctAnswer": "-COOH",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 5
    },
    {
      "question": "Which is the simplest alkene?",
      "options": ["Ethene", "Propene", "Butene", "Pentene"],
      "correctAnswer": "Ethene",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 6
    },
    {
      "question": "What is the functional group in esters?",
      "options": ["-OH", "-CHO", "-COOH", "-COOR"],
      "correctAnswer": "-COOR",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 7
    },
    {
      "question": "Which is the primary component of natural gas?",
      "options": ["Methane", "Ethane", "Propane", "Butane"],
      "correctAnswer": "Methane",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 8
    },
    {
      "question": "What is the common name for ethanoic acid?",
      "options": ["Acetic acid", "Citric acid", "Formic acid", "Propionic acid"],
      "correctAnswer": "Acetic acid",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 9
    },
    {
      "question": "Which type of isomerism is exhibited by butane and isobutane?",
      "options": ["Chain isomerism", "Position isomerism", "Functional isomerism", "Metamerism"],
      "correctAnswer": "Chain isomerism",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 10
    }
, 
    {
      "question": "Explain the concept of structural isomerism in carbon compounds.",
      "options": ["Isomerism not explained", "Isomerism explained", "No structural explanation", "Random explanation"],
      "correctAnswer": "Isomerism explained",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 51
    },
    {
      "question": "What is the IUPAC name of CH3-CHO?",
      "options": ["Methanal", "Ethanal", "Propanal", "Butanal"],
      "correctAnswer": "Ethanal",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 52
    },
    {
      "question": "Discuss the properties and uses of aldehydes and ketones.",
      "options": ["Limited properties", "Extensive properties", "No properties", "Random properties"],
      "correctAnswer": "Extensive properties",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 53
    },
    {
      "question": "Explain the concept of geometrical isomerism in alkenes.",
      "options": ["Isomerism not explained", "Isomerism explained", "No geometrical explanation", "Random explanation"],
      "correctAnswer": "Isomerism explained",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 54
    },
    {
      "question": "Discuss the structure and properties of benzene.",
      "options": ["Limited properties", "Extensive properties", "No properties", "Random properties"],
      "correctAnswer": "Extensive properties",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 55
    },
    {
      "question": "What is the difference between primary, secondary, and tertiary alcohols?",
      "options": ["No difference", "Different carbon atoms", "Different functional groups", "Random difference"],
      "correctAnswer": "Different carbon atoms",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 56
    },
    {
      "question": "Explain the concept of resonance in benzene.",
      "options": ["Resonance not explained", "Resonance explained", "No resonance explanation", "Random explanation"],
      "correctAnswer": "Resonance explained",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 57
    },
    {
      "question": "Discuss the properties and uses of ethers.",
      "options": ["Limited properties", "Extensive properties", "No properties", "Random properties"],
      "correctAnswer": "Extensive properties",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 58
    },
    {
      "question": "Explain the concept of tautomerism in organic compounds.",
      "options": ["Tautomerism not explained", "Tautomerism explained", "No tautomerism explanation", "Random explanation"],
      "correctAnswer": "Tautomerism explained",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 59
    },
    {
      "question": "Discuss the structure and properties of alkanes.",
      "options": ["Limited properties", "Extensive properties", "No properties", "Random properties"],
      "correctAnswer": "Extensive properties",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 60
    },
    {
      "question": "Explain the concept of polymerization and provide examples of synthetic polymers.",
      "options": ["No examples", "Common examples", "Random examples", "No polymerization explanation"],
      "correctAnswer": "Common examples",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 101
    },
    {
      "question": "Discuss the properties and uses of phenols.",
      "options": ["Limited properties", "Extensive properties", "No properties", "Random properties"],
      "correctAnswer": "Extensive properties",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 102
    },
    {
      "question": "Explain the concept of isomerism in coordination compounds.",
      "options": ["Isomerism not explained", "Isomerism explained", "No isomerism explanation", "Random explanation"],
      "correctAnswer": "Isomerism explained",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 103
    },
    {
      "question": "Discuss the structure and properties of carboxylic acids.",
      "options": ["Limited properties", "Extensive properties", "No properties", "Random properties"],
      "correctAnswer": "Extensive properties",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 104
    },
    {
      "question": "Explain the concept of chirality in organic compounds.",
      "options": ["Chirality not explained", "Chirality explained", "No chirality explanation", "Random explanation"],
      "correctAnswer": "Chirality explained",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 105
    },
    {
      "question": "Discuss the properties and uses of amines.",
      "options": ["Limited properties", "Extensive properties", "No properties", "Random properties"],
      "correctAnswer": "Extensive properties",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 106
    },
    {
      "question": "Explain the concept of synthetic detergents and their advantages over soap.",
      "options": ["Limited advantages", "Extensive advantages", "No advantages", "Random advantages"],
      "correctAnswer": "Extensive advantages",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 107
    },
    {
      "question": "Discuss the structure and properties of halogenated hydrocarbons.",
      "options": ["Limited properties", "Extensive properties", "No properties", "Random properties"],
      "correctAnswer": "Extensive properties",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 108
    },
    {
      "question": "Explain the concept of environmental impact of carbon compounds.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 109
    },
    {
      "question": "Discuss the properties and uses of organometallic compounds.",
      "options": ["Limited properties", "Extensive properties", "No properties", "Random properties"],
      "correctAnswer": "Extensive properties",
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
const chapter9 = data.map(entry => ({ ...entry, sublevel: convertSublevel(entry.sublevel) }));
console.log(chapter9);

export default chapter9;