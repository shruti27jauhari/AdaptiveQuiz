const data = [
    {
      "question": "What is the primary goal of disaster management?",
      "options": ["Creating disasters", "Minimizing the impact of disasters", "Causing panic", "Ignoring disasters"],
      "correctAnswer": "Minimizing the impact of disasters",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 1
    },
    {
      "question": "What is the first phase of disaster management?",
      "options": ["Response", "Recovery", "Mitigation", "Preparedness"],
      "correctAnswer": "Preparedness",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 2
    },
    {
      "question": "Which organization plays a crucial role in coordinating international disaster response efforts?",
      "options": ["WHO", "UNESCO", "NASA", "UNICEF"],
      "correctAnswer": "WHO",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 3
    },
    {
      "question": "What does the term 'mitigation' mean in the context of disaster management?",
      "options": ["Increasing the impact of disasters", "Reducing the impact of disasters", "Ignoring disasters", "Creating disasters"],
      "correctAnswer": "Reducing the impact of disasters",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 4
    },
    {
      "question": "What is the purpose of conducting drills and exercises in disaster management?",
      "options": ["To create panic", "To waste time", "To test response capabilities", "To ignore disasters"],
      "correctAnswer": "To test response capabilities",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 5
    },
    {
      "question": "What is the role of the community in disaster management?",
      "options": ["To increase vulnerability", "To decrease resilience", "To ignore warnings", "To actively participate and prepare"],
      "correctAnswer": "To actively participate and prepare",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 6
    },
    {
      "question": "What is the purpose of early warning systems in disaster management?",
      "options": ["To create confusion", "To delay response", "To provide timely alerts", "To ignore disasters"],
      "correctAnswer": "To provide timely alerts",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 7
    },
    {
      "question": "Which natural disasters are commonly addressed in disaster management plans?",
      "options": ["Rainfall", "Sunshine", "Earthquakes", "Mild winds"],
      "correctAnswer": "Earthquakes",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 8
    },
    {
      "question": "What is the purpose of creating evacuation plans in disaster management?",
      "options": ["To increase vulnerability", "To cause chaos", "To save lives and reduce injury", "To ignore disasters"],
      "correctAnswer": "To save lives and reduce injury",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 9
    },
    {
      "question": "What does the term 'resilience' mean in the context of disaster management?",
      "options": ["Increasing vulnerability", "Bouncing back from adversity", "Ignoring disasters", "Creating disasters"],
      "correctAnswer": "Bouncing back from adversity",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 10
    },
    {
      "question": "Explain the concept of the 'disaster risk reduction' approach in disaster management.",
      "options": ["Limited approach", "Extensive approach", "No approach", "Random approach"],
      "correctAnswer": "Extensive approach",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 51
    },
    {
      "question": "Discuss the importance of community-based disaster risk management strategies.",
      "options": ["Limited importance", "Extensive importance", "No importance", "Random importance"],
      "correctAnswer": "Extensive importance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 52
    },
    {
      "question": "Explain the role of technology in enhancing disaster response and recovery efforts.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 53
    },
    {
      "question": "Discuss the challenges and benefits of international collaboration in disaster management.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 54
    },
    {
      "question": "Explain the concept of 'build back better' in the context of post-disaster recovery.",
      "options": ["Limited concept", "Extensive concept", "No concept", "Random concept"],
      "correctAnswer": "Extensive concept",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 55
    },
    {
      "question": "Discuss the role of social media in disaster communication and public awareness.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 56
    },
    {
      "question": "Explain the importance of community mapping in disaster risk assessment.",
      "options": ["Limited importance", "Extensive importance", "No importance", "Random importance"],
      "correctAnswer": "Extensive importance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 57
    },
    {
      "question": "Discuss the role of education in building a disaster-resilient community.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 58
    },
    {
      "question": "Explain the concept of 'disaster diplomacy' and its potential positive and negative outcomes.",
      "options": ["Limited outcomes", "Extensive outcomes", "No outcomes", "Random outcomes"],
      "correctAnswer": "Extensive outcomes",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 59
    },
    {
      "question": "Discuss the challenges and benefits of involving local communities in disaster management planning.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 60
    },
    {
      "question": "Explain the concept of 'resilience-based recovery' in disaster management and its application in post-disaster reconstruction.",
      "options": ["Limited application", "Extensive application", "No application", "Random application"],
      "correctAnswer": "Extensive application",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 101
    },
    {
      "question": "Discuss the ethical considerations in allocating resources during disaster response and recovery.",
      "options": ["Limited considerations", "Extensive considerations", "No considerations", "Random considerations"],
      "correctAnswer": "Extensive considerations",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 102
    },
    {
      "question": "Explain the challenges and benefits of integrating climate change adaptation into disaster management strategies.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 103
    },
    {
      "question": "Discuss the role of insurance and financial mechanisms in enhancing community resilience to disasters.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 104
    },
    {
      "question": "Explain the concept of 'psychosocial support' and its importance in post-disaster recovery.",
      "options": ["Limited importance", "Extensive importance", "No importance", "Random importance"],
      "correctAnswer": "Extensive importance",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 105
    },
    {
      "question": "Discuss the challenges and benefits of incorporating indigenous knowledge in disaster risk reduction strategies.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 106
    },
    {
      "question": "Explain the role of public-private partnerships in disaster preparedness, response, and recovery.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 107
    },
    {
      "question": "Discuss the challenges and benefits of coordinating international humanitarian assistance during large-scale disasters.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 108
    },
    {
      "question": "Explain the concept of 'build back differently' and its role in promoting sustainable development after disasters.",
      "options": ["Limited concept", "Extensive concept", "No concept", "Random concept"],
      "correctAnswer": "Extensive concept",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 109
    },
    {
      "question": "Discuss the challenges and benefits of managing displaced populations during and after disasters.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
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