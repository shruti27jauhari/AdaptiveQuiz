const data = [
    {
      "question": "What is the primary source of energy in solar power generation?",
      "options": ["Wind", "Coal", "Sunlight", "Natural gas"],
      "correctAnswer": "Sunlight",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 1
    },
    {
      "question": "Which renewable energy source harnesses the Earth's internal heat for power generation?",
      "options": ["Wind energy", "Geothermal energy", "Hydropower", "Biomass energy"],
      "correctAnswer": "Geothermal energy",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 2
    },
    {
      "question": "What is the primary advantage of wind power as a green energy source?",
      "options": ["High pollution", "Intermittent availability", "Low cost", "Abundant resource"],
      "correctAnswer": "Abundant resource",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 3
    },
    {
      "question": "Which gas is commonly used in fuel cells for electricity production?",
      "options": ["Oxygen", "Nitrogen", "Methane", "Hydrogen"],
      "correctAnswer": "Hydrogen",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 4
    },
    {
      "question": "What is the primary benefit of using LED lights for energy efficiency?",
      "options": ["High energy consumption", "Low brightness", "Long lifespan", "High heat production"],
      "correctAnswer": "Long lifespan",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 5
    },
    {
      "question": "Which process is commonly used in hydropower plants to generate electricity?",
      "options": ["Wind rotation", "Solar heating", "Water turbine rotation", "Natural gas combustion"],
      "correctAnswer": "Water turbine rotation",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 6
    },
    {
      "question": "What is the primary advantage of using biofuels as an alternative to traditional fuels?",
      "options": ["Increased pollution", "Limited availability", "Reduced carbon emissions", "High cost"],
      "correctAnswer": "Reduced carbon emissions",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 7
    },
    {
      "question": "Which technology converts sunlight into electricity using semiconductor materials?",
      "options": ["Wind turbine", "Solar cell", "Geothermal plant", "Biomass boiler"],
      "correctAnswer": "Solar cell",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 8
    },
    {
      "question": "What is the primary source of energy in tidal power generation?",
      "options": ["Sunlight", "Wind", "Tides", "Geothermal heat"],
      "correctAnswer": "Tides",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 9
    },
    {
      "question": "Which energy-efficient technology is used to regulate home temperatures?",
      "options": ["Central heating", "Insulation", "Air conditioning", "Open windows"],
      "correctAnswer": "Insulation",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 10
    },
    {
      "question": "Explain the process of harnessing energy from ocean waves and its potential as a renewable resource.",
      "options": ["Limited potential", "Extensive potential", "No potential", "Random potential"],
      "correctAnswer": "Extensive potential",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 51
    },
    {
      "question": "Discuss the challenges and benefits of implementing a smart grid for efficient energy distribution.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 52
    },
    {
      "question": "Explain the concept of energy storage technologies and their role in supporting renewable energy sources.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 53
    },
    {
      "question": "Discuss the impact of energy-efficient buildings and design in reducing overall energy consumption.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 54
    },
    {
      "question": "Explain the challenges and benefits of integrating electric vehicles into the transportation sector for sustainable mobility.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 55
    },
    {
      "question": "Discuss the potential of nuclear fusion as a future source of clean and abundant energy.",
      "options": ["Limited potential", "Extensive potential", "No potential", "Random potential"],
      "correctAnswer": "Extensive potential",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 56
    },
    {
      "question": "Explain the role of energy audits in identifying opportunities for energy efficiency in residential and commercial buildings.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 57
    },
    {
      "question": "Discuss the environmental and economic impacts of large-scale solar power plants in energy production.",
      "options": ["Limited impacts", "Extensive impacts", "No impacts", "Random impacts"],
      "correctAnswer": "Extensive impacts",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 58
    },
    {
      "question": "Explain the challenges and benefits of harnessing energy from biomass for electricity generation.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 59
    },
    {
      "question": "Discuss the role of government policies in promoting the adoption of renewable energy technologies.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 60
    },
    {
      "question": "Explain the concept of energy harvesting from ambient sources and its potential applications.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 101
    },
    {
      "question": "Discuss the challenges and benefits of implementing a hydrogen economy for clean energy storage and transport.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 102
    },
    {
      "question": "Explain the role of artificial intelligence in optimizing energy systems and improving overall efficiency.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 103
    },
    {
      "question": "Discuss the challenges and benefits of implementing energy-efficient technologies in industrial processes.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 104
    },
    {
      "question": "Explain the concept of distributed energy generation and its role in enhancing grid resilience.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 105
    },
    {
      "question": "Discuss the potential environmental and social impacts of large-scale hydropower projects.",
      "options": ["Limited impacts", "Extensive impacts", "No impacts", "Random impacts"],
      "correctAnswer": "Extensive impacts",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 106
    },
    {
      "question": "Explain the challenges and benefits of implementing energy-efficient technologies in the agricultural sector.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 107
    },
    {
      "question": "Discuss the potential of space-based solar power as a sustainable and continuous energy source.",
      "options": ["Limited potential", "Extensive potential", "No potential", "Random potential"],
      "correctAnswer": "Extensive potential",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 108
    },
    {
      "question": "Explain the challenges and benefits of integrating renewable energy sources into existing energy grids.",
      "options": ["Limited benefits", "Extensive benefits", "No benefits", "Random benefits"],
      "correctAnswer": "Extensive benefits",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 109
    },
    {
      "question": "Discuss the role of international collaborations in advancing research and development in green energy technologies.",
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