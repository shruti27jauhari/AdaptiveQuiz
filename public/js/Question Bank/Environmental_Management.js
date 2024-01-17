const data = [
    {
      "question": "What is the primary goal of environmental management?",
      "options": ["Resource depletion", "Biodiversity conservation", "Pollution increase", "Urbanization"],
      "correctAnswer": "Biodiversity conservation",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 1
    },
    {
      "question": "Which of the following is a renewable energy source?",
      "options": ["Coal", "Natural gas", "Solar power", "Nuclear energy"],
      "correctAnswer": "Solar power",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 2
    },
    {
      "question": "What is the role of environmental impact assessments (EIAs) in environmental management?",
      "options": ["Promote pollution", "Assess biodiversity", "Increase waste disposal", "Encourage deforestation"],
      "correctAnswer": "Assess biodiversity",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 3
    },
    {
      "question": "Which gas is primarily responsible for the greenhouse effect?",
      "options": ["Oxygen", "Nitrogen", "Carbon dioxide", "Methane"],
      "correctAnswer": "Carbon dioxide",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 4
    },
    {
      "question": "What is the purpose of waste management in environmental conservation?",
      "options": ["Increase pollution", "Reduce resource use", "Promote deforestation", "Encourage industrial waste"],
      "correctAnswer": "Reduce resource use",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 5
    },
    {
      "question": "Which international agreement focuses on reducing greenhouse gas emissions?",
      "options": ["Kyoto Protocol", "Montreal Protocol", "Paris Agreement", "Rio Convention"],
      "correctAnswer": "Paris Agreement",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 6
    },
    {
      "question": "What is the main purpose of wildlife conservation in environmental management?",
      "options": ["Encourage hunting", "Preserve biodiversity", "Promote habitat destruction", "Increase pollution"],
      "correctAnswer": "Preserve biodiversity",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 7
    },
    {
      "question": "Which practice contributes to sustainable agriculture and environmental conservation?",
      "options": ["Monoculture farming", "Pesticide overuse", "Deforestation", "Crop rotation"],
      "correctAnswer": "Crop rotation",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 8
    },
    {
      "question": "What is the primary aim of water resource management in environmental planning?",
      "options": ["Water pollution increase", "Encourage water scarcity", "Ensure water availability", "Promote industrial discharge"],
      "correctAnswer": "Ensure water availability",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 9
    },
    {
      "question": "Which environmental management practice focuses on protecting coastal ecosystems?",
      "options": ["Deforestation", "Desertification", "Integrated coastal zone management", "Urbanization"],
      "correctAnswer": "Integrated coastal zone management",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 10
    },
    {
      "question": "Explain the concept of sustainable development and its importance in environmental management.",
      "options": ["Limited importance", "Extensive importance", "No importance", "Random importance"],
      "correctAnswer": "Extensive importance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 51
    },
    {
      "question": "Discuss the role of environmental education in promoting awareness and conservation.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 52
    },
    {
      "question": "Explain the concept of ecosystem services and their significance in environmental management.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 53
    },
    {
      "question": "Discuss the impact of deforestation on biodiversity and climate change.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 54
    },
    {
      "question": "Explain the role of community participation in successful environmental management.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 55
    },
    {
      "question": "Discuss the challenges and benefits of recycling as a waste management strategy.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 56
    },
    {
      "question": "Explain the concept of environmental justice and its role in addressing environmental issues.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 57
    },
    {
      "question": "Discuss the impact of air pollution on human health and the environment.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 58
    },
    {
      "question": "Explain the concept of environmental stewardship and its role in sustainable resource management.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 59
    },
    {
      "question": "Discuss the importance of wetland conservation in preserving biodiversity and mitigating floods.",
      "options": ["Limited importance", "Extensive importance", "No importance", "Random importance"],
      "correctAnswer": "Extensive importance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 60
    },
    {
      "question": "Explain the concept of ecological footprint and its role in measuring human impact on the environment.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 101
    },
    {
      "question": "Discuss the challenges and solutions in managing electronic waste for environmental sustainability.",
      "options": ["Limited solutions", "Extensive solutions", "No solutions", "Random solutions"],
      "correctAnswer": "Extensive solutions",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 102
    },
    {
      "question": "Explain the impact of overfishing on marine ecosystems and sustainable fisheries management.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 103
    },
    {
      "question": "Discuss the concept of carbon sequestration and its role in mitigating climate change.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 104
    },
    {
      "question": "Explain the challenges and benefits of transitioning to a circular economy for sustainable resource use.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 105
    },
    {
      "question": "Discuss the impact of urbanization on natural habitats and strategies for sustainable urban development.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 106
    },
    {
      "question": "Explain the role of technology in promoting environmental sustainability and conservation.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 107
    },
    {
      "question": "Discuss the challenges and benefits of implementing biodiversity offsetting in conservation projects.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 108
    },
    {
      "question": "Explain the concept of green infrastructure and its role in urban planning for environmental conservation.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 109
    },
    {
      "question": "Discuss the challenges and benefits of implementing a circular water economy for sustainable water management.",
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