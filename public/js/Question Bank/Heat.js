const data = [
    {
      "question": "What is the unit of heat?",
      "options": ["Joule", "Calorie", "Watt", "Ampere"],
      "correctAnswer": "Joule",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 1
    },
    {
      "question": "How does heat transfer occur in solids?",
      "options": ["Conduction", "Convection", "Radiation", "Absorption"],
      "correctAnswer": "Conduction",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 2
    },
    {
      "question": "What happens to the volume of most substances when heated?",
      "options": ["Expands", "Contracts", "Remains constant", "Varies randomly"],
      "correctAnswer": "Expands",
      "level": "Easy",
      "type": "Understand",
      "sublevel": 3
    },
    {
      "question": "Which material is a good conductor of heat?",
      "options": ["Wood", "Plastic", "Metal", "Rubber"],
      "correctAnswer": "Metal",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 4
    },
    {
      "question": "What is the specific heat capacity of water?",
      "options": ["1 J/g°C", "2 J/g°C", "4 J/g°C", "8 J/g°C"],
      "correctAnswer": "4 J/g°C",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 5
    },
    {
      "question": "What is the boiling point of water in Celsius?",
      "options": ["100°C", "0°C", "-100°C", "50°C"],
      "correctAnswer": "100°C",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 6
    },
    {
      "question": "How is heat measured in a laboratory setting?",
      "options": ["Thermometer", "Barometer", "Hydrometer", "Anemometer"],
      "correctAnswer": "Thermometer",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 7
    },
    {
      "question": "Which color absorbs more heat?",
      "options": ["Black", "White", "Blue", "Green"],
      "correctAnswer": "Black",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 8
    },
    {
      "question": "What is the process of heat transfer in a vacuum?",
      "options": ["Conduction", "Convection", "Radiation", "Absorption"],
      "correctAnswer": "Radiation",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 9
    },
    {
      "question": "What is the temperature at which both Fahrenheit and Celsius scales have the same value?",
      "options": ["0°F", "32°F", "-40°F", "100°F"],
      "correctAnswer": "-40°F",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 10
    },
    {
      "question": "Explain the concept of heat capacity and its significance.",
      "options": ["Capacity to absorb heat", "Capacity to release heat", "No capacity", "Random capacity"],
      "correctAnswer": "Capacity to absorb heat",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 51
    },
    {
      "question": "Discuss the factors affecting the rate of heat conduction in a material.",
      "options": ["Material density", "Material thickness", "Material conductivity", "No factors"],
      "correctAnswer": "Material density, Material thickness, Material conductivity",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 52
    },
    {
      "question": "Explain the process of heat transfer in a fluid.",
      "options": ["Conduction", "Convection", "Radiation", "Absorption"],
      "correctAnswer": "Convection",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 53
    },
    {
      "question": "Discuss the importance of insulation in energy conservation.",
      "options": ["Increases energy use", "Decreases energy use", "No impact on energy use", "Random impact"],
      "correctAnswer": "Decreases energy use",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 54
    },
    {
      "question": "Explain the principles of calorimetry and its applications.",
      "options": ["Measurement of temperature", "Measurement of heat transfer", "No measurement", "Random measurement"],
      "correctAnswer": "Measurement of heat transfer",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 55
    },
    {
      "question": "Discuss the factors affecting the specific heat capacity of a substance.",
      "options": ["Temperature and pressure", "Density and volume", "Mass and composition", "No factors"],
      "correctAnswer": "Mass and composition",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 56
    },
    {
      "question": "Explain the working principle of a refrigerator.",
      "options": ["Absorption of heat", "Release of heat", "No heat transfer", "Random heat transfer"],
      "correctAnswer": "Absorption of heat",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 57
    },
    {
      "question": "Discuss the applications of heat in various industries.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 58
    },
    {
      "question": "Explain the concept of thermal expansion and its consequences.",
      "options": ["Expansion decreases density", "Expansion increases density", "No impact on density", "Random impact"],
      "correctAnswer": "Expansion increases density",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 59
    },
    {
      "question": "Discuss the role of heat in the phase transition of matter.",
      "options": ["No role", "Melting and freezing", "Evaporation and condensation", "Random role"],
      "correctAnswer": "Melting and freezing, Evaporation and condensation",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 60
    },
    {
      "question": "Discuss the principles of thermodynamics and their applications.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 101
    },
    {
      "question": "Explain the concept of heat engines and their efficiency.",
      "options": ["Low efficiency", "High efficiency", "No efficiency", "Random efficiency"],
      "correctAnswer": "High efficiency",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 102
    },
    {
      "question": "Discuss the principles of heat pumps and their applications.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 103
    },
    {
      "question": "Explain the concept of entropy and its role in thermodynamics.",
      "options": ["Increasing disorder", "Decreasing disorder", "No disorder", "Random disorder"],
      "correctAnswer": "Increasing disorder",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 104
    },
    {
      "question": "Discuss the principles of heat transfer in nanoscale systems.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 105
    },
    {
      "question": "Explain the challenges and innovations in thermal insulation.",
      "options": ["Limited challenges", "Extensive challenges", "No challenges", "Random challenges"],
      "correctAnswer": "Extensive challenges",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 106
    },
    {
      "question": "Discuss the principles of heat transfer in space exploration.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 107
    },
    {
      "question": "Explain the concept of thermoelectric materials and their applications.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 108
    },
    {
      "question": "Discuss the role of heat in the design of electronic devices.",
      "options": ["No role", "Limited role", "Critical role", "Random role"],
      "correctAnswer": "Critical role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 109
    },
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