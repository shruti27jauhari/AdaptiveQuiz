const data = [
    {
      "question": "What is the unit of electric current?",
      "options": ["Ohm", "Ampere", "Volt", "Watt"],
      "correctAnswer": "Ampere",
      "level": "Easy",
      "type": "Remember",
      "sublevel": "1"
    },
    {
      "question": "In which direction do electrons flow in an electric circuit?",
      "options": ["From positive to negative", "From negative to positive", "Both directions", "No flow"],
      "correctAnswer": "From negative to positive",
      "level": "Easy",
      "type": "Remember",
      "sublevel": "2"
    },
    {
      "question": "What effect does an electric current have on a magnetic needle?",
      "options": ["Attracts", "Repels", "No effect", "Random effect"],
      "correctAnswer": "Attracts",
      "level": "Easy",
      "type": "Remember",
      "sublevel": "3"
    },
    {
      "question": "What is the function of an electric fuse in a circuit?",
      "options": ["Increase current", "Decrease current", "Break the circuit", "No function"],
      "correctAnswer": "Break the circuit",
      "level": "Easy",
      "type": "Understand",
      "sublevel": "4"
    },
    {
      "question": "Which material is commonly used as a conductor in electric wires?",
      "options": ["Wood", "Copper", "Rubber", "Glass"],
      "correctAnswer": "Copper",
      "level": "Easy",
      "type": "Remember",
      "sublevel": "5"
    },
    {
      "question": "What happens to the brightness of a bulb when the voltage increases?",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Increases",
      "level": "Easy",
      "type": "Understand",
      "sublevel": "6"
    },
    {
      "question": "What is the purpose of the Earth wire in an electrical appliance?",
      "options": ["Increase resistance", "Decrease resistance", "Safety grounding", "No purpose"],
      "correctAnswer": "Safety grounding",
      "level": "Easy",
      "type": "Understand",
      "sublevel": "7"
    },
    {
      "question": "What is the SI unit of electric power?",
      "options": ["Ampere-hour", "Joule", "Watt", "Volt"],
      "correctAnswer": "Watt",
      "level": "Easy",
      "type": "Remember",
      "sublevel": "8"
    },
    {
      "question": "In a series circuit, what happens to the total resistance as more resistors are added?",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Increases",
      "level": "Easy",
      "type": "Understand",
      "sublevel": "9"
    },
    {
      "question": "What is the effect of doubling the voltage in a circuit with a constant resistance?",
      "options": ["Doubles the current", "Halves the current", "No effect on current", "Random effect"],
      "correctAnswer": "Doubles the current",
      "level": "Easy",
      "type": "Understand",
      "sublevel": "10"
    },
    {
      "question": "Explain the difference between AC (Alternating Current) and DC (Direct Current).",
      "options": ["Direction of current", "Frequency of current", "Voltage of current", "No difference"],
      "correctAnswer": "Direction of current",
      "level": "Medium",
      "type": "Understand",
      "sublevel": "11"
    },
    {
      "question": "What is the purpose of a capacitor in an electric circuit?",
      "options": ["Store electrical energy", "Release electrical energy", "Break the circuit", "No purpose"],
      "correctAnswer": "Store electrical energy",
      "level": "Medium",
      "type": "Understand",
      "sublevel": "12"
    },
    {
      "question": "Discuss the impact of temperature on the resistance of a conductor.",
      "options": ["Increases resistance", "Decreases resistance", "No impact", "Random impact"],
      "correctAnswer": "Increases resistance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": "13"
    },
    {
      "question": "What is the role of an ammeter in an electric circuit?",
      "options": ["Measure voltage", "Measure current", "Measure resistance", "No role"],
      "correctAnswer": "Measure current",
      "level": "Medium",
      "type": "Understand",
      "sublevel": "14"
    },
    {
      "question": "Explain the concept of electric potential difference in a circuit.",
      "options": ["Voltage across a component", "Current across a component", "Resistance across a component", "No difference"],
      "correctAnswer": "Voltage across a component",
      "level": "Medium",
      "type": "Understand",
      "sublevel": "15"
    },
    {
      "question": "Discuss the factors affecting the resistance of a wire.",
      "options": ["Length and thickness", "Color and texture", "Temperature and pressure", "No factors"],
      "correctAnswer": "Length and thickness",
      "level": "Medium",
      "type": "Understand",
      "sublevel": "16"
    },
    {
      "question": "What is the purpose of an insulator in an electric circuit?",
      "options": ["Increase current flow", "Decrease current flow", "Prevent current flow", "No purpose"],
      "correctAnswer": "Prevent current flow",
      "level": "Medium",
      "type": "Understand",
      "sublevel": "17"
    },
    {
      "question": "Explain the working principle of an electric generator.",
      "options": ["Converts mechanical energy to electrical energy", "Converts electrical energy to mechanical energy", "No conversion", "Random conversion"],
      "correctAnswer": "Converts mechanical energy to electrical energy",
      "level": "Medium",
      "type": "Understand",
      "sublevel": "18"
    },
    {
      "question": "Discuss the applications of resistors in electronic devices.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Medium",
      "type": "Understand",
      "sublevel": "19"
    },
    {
      "question": "Explain the concept of electric circuit and its components.",
      "options": ["Closed loop of conductors", "Open loop of conductors", "No loop", "Random loop"],
      "correctAnswer": "Closed loop of conductors",
      "level": "Medium",
      "type": "Understand",
      "sublevel": "20"
    },
    {
      "question": "Discuss the principles of superconductivity and its potential applications.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": "21"
    },
    {
      "question": "Explain the concept of electric shock and safety measures in electrical installations.",
      "options": ["Shock increases resistance", "Shock decreases resistance", "Shock no impact", "Random shock"],
      "correctAnswer": "Shock no impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": "22"
    },
    {
      "question": "Discuss the advantages and disadvantages of parallel and series circuits.",
      "options": ["Parallel better for appliances", "Series better for appliances", "Both have no advantages", "Random advantages"],
      "correctAnswer": "Parallel better for appliances, Series better for appliances",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": "23"
    },
    {
      "question": "Explain the concept of electrical resistance in semiconductors.",
      "options": ["High resistance", "Low resistance", "No resistance", "Random resistance"],
      "correctAnswer": "High resistance, Low resistance",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": "24"
    },
    {
      "question": "Discuss the principles of electrical conductivity in liquids.",
      "options": ["Conductivity increases with ions", "Conductivity decreases with ions", "No conductivity", "Random conductivity"],
      "correctAnswer": "Conductivity increases with ions",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": "25"
    },
    {
      "question": "Explain the working of a semiconductor diode and its applications.",
      "options": ["Rectification of current", "Amplification of current", "No effect on current", "Random effect"],
      "correctAnswer": "Rectification of current",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": "26"
    },
    {
      "question": "Discuss the principles of magnetic effects of electric current and its applications.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": "27"
    },
    {
      "question": "Explain the concept of electric power transmission and distribution.",
      "options": ["High voltage for transmission", "Low voltage for transmission", "No transmission", "Random transmission"],
      "correctAnswer": "High voltage for transmission",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": "28"
    },
    {
      "question": "Discuss the challenges and solutions in electrical power generation.",
      "options": ["Limited challenges", "Extensive challenges", "No challenges", "Random challenges"],
      "correctAnswer": "Extensive challenges",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": "29"
    },
    {
      "question": "Explain the principles of electromagnetic induction and its applications.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": "30"
    }
  ];

  function convertSublevel(sublevel) {
    if (sublevel >= 51 && sublevel <= 60) {
        return (sublevel - 40).toString();
    } else if (sublevel >= 101 && sublevel <= 110) {
        return (sublevel - 80).toString();
    } else {
        return sublevel.toString();
    }
}

  const chapter2 = data.map(entry => ({ ...entry, sublevel: convertSublevel(entry.sublevel) }));
  console.log(chapter2);

export default chapter2;
  