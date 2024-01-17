const data = [
    {
      "question": "What is social health?",
      "options": ["Physical fitness", "Mental well-being", "Healthy relationships", "Financial stability"],
      "correctAnswer": "Healthy relationships",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 1
    },
    {
      "question": "Why are supportive social networks important for social health?",
      "options": ["To increase stress", "To improve sleep", "To decrease communication", "To cause isolation"],
      "correctAnswer": "To improve sleep",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 2
    },
    {
      "question": "What is the term for the ability to form positive and satisfying relationships?",
      "options": ["Social isolation", "Social competence", "Social anxiety", "Social discrimination"],
      "correctAnswer": "Social competence",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 3
    },
    {
      "question": "How does active listening contribute to social health?",
      "options": ["Increases misunderstanding", "Promotes empathy", "Encourages isolation", "Reduces communication"],
      "correctAnswer": "Promotes empathy",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 4
    },
    {
      "question": "What is the impact of positive social interactions on mental health?",
      "options": ["Worsens mental health", "Has no impact", "Improves mental health", "Causes physical illness"],
      "correctAnswer": "Improves mental health",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 5
    },
    {
      "question": "What does the term 'social support' refer to in the context of social health?",
      "options": ["Isolation from friends", "Financial assistance", "Emotional and practical help", "Negative criticism"],
      "correctAnswer": "Emotional and practical help",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 6
    },
    {
      "question": "How can volunteering contribute to social health?",
      "options": ["Increases stress", "Promotes social isolation", "Builds community connections", "Worsens mental health"],
      "correctAnswer": "Builds community connections",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 7
    },
    {
      "question": "What is the role of effective communication in social health?",
      "options": ["Promotes misunderstandings", "Strengthens relationships", "Encourages isolation", "Decreases empathy"],
      "correctAnswer": "Strengthens relationships",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 8
    },
    {
      "question": "How does social health contribute to overall well-being?",
      "options": ["No impact on well-being", "Negatively impacts well-being", "Positively impacts well-being", "Causes physical illness"],
      "correctAnswer": "Positively impacts well-being",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 9
    },
    {
      "question": "What is the importance of social connections in times of stress?",
      "options": ["Increases stress levels", "Worsens mental health", "Provides support and coping", "Promotes social isolation"],
      "correctAnswer": "Provides support and coping",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 10
    },
    {
      "question": "Explain the concept of social determinants of health and their impact on social well-being.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 51
    },
    {
      "question": "Discuss the role of social norms in shaping individual and community behaviors.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 52
    },
    {
      "question": "Explain the concept of social capital and its influence on community well-being.",
      "options": ["Limited influence", "Extensive influence", "No influence", "Random influence"],
      "correctAnswer": "Extensive influence",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 53
    },
    {
      "question": "Discuss the impact of social media on social health and interpersonal relationships.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 54
    },
    {
      "question": "Explain the role of cultural competence in promoting social health in diverse communities.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 55
    },
    {
      "question": "Discuss the challenges and benefits of building and maintaining social connections in the digital age.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 56
    },
    {
      "question": "Explain the concept of social exclusion and its impact on individual well-being.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 57
    },
    {
      "question": "Discuss the role of community engagement in promoting social health at the local level.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 58
    },
    {
      "question": "Explain the impact of socioeconomic factors on social health disparities within communities.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 59
    },
    {
      "question": "Discuss the role of empathy in building and maintaining positive social relationships.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 60
    },
    {
      "question": "Discuss the impact of social inequality on the mental health of individuals and communities.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 101
    },
    {
      "question": "Explain the role of community-based interventions in addressing social health disparities.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 102
    },
    {
      "question": "Discuss the challenges and strategies for promoting social health in culturally diverse communities.",
      "options": ["Limited strategies", "Extensive strategies", "No strategies", "Random strategies"],
      "correctAnswer": "Extensive strategies",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 103
    },
    {
      "question": "Explain the concept of social resilience and its role in overcoming challenges and adversity.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 104
    },
    {
      "question": "Discuss the impact of social isolation on physical and mental health outcomes.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 105
    },
    {
      "question": "Explain the concept of social justice and its role in promoting equitable health outcomes.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 106
    },
    {
      "question": "Discuss the impact of globalization on social health and community well-being.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 107
    },
    {
      "question": "Explain the challenges and benefits of implementing social policies that address health disparities.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 108
    },
    {
      "question": "Discuss the impact of digital inequality on access to social resources and health information.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 109
    },
    {
      "question": "Explain the role of community organizing in addressing social determinants of health.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
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