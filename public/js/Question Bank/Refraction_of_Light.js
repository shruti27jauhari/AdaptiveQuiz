const data = [
    {
      "question": "What is refraction of light?",
      "options": ["Reflection of light", "Bending of light", "Blocking of light", "Absorption of light"],
      "correctAnswer": "Bending of light",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 1
    },
    {
      "question": "In which direction does light bend when it enters a denser medium?",
      "options": ["Away from the normal", "Towards the normal", "No bending", "Random bending"],
      "correctAnswer": "Towards the normal",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 2
    },
    {
      "question": "What is the refractive index of a medium with slower light speed?",
      "options": ["High refractive index", "Low refractive index", "No refractive index", "Random refractive index"],
      "correctAnswer": "High refractive index",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 3
    },
    {
      "question": "What happens to the speed of light when it enters a denser medium?",
      "options": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
      "correctAnswer": "Decreases",
      "level": "Easy",
      "type": "Understand",
      "sublevel": 4
    },
    {
      "question": "What is the angle of incidence equal to in the case of normal incidence?",
      "options": ["90 degrees", "45 degrees", "0 degrees", "Random degrees"],
      "correctAnswer": "0 degrees",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 5
    },
    {
      "question": "What is the phenomenon when a pencil partially immersed in water appears bent?",
      "options": ["Reflection", "Refraction", "Dispersion", "Diffraction"],
      "correctAnswer": "Refraction",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 6
    },
    {
      "question": "Which color of light bends the most during refraction?",
      "options": ["Red", "Green", "Blue", "Yellow"],
      "correctAnswer": "Blue",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 7
    },
    {
      "question": "What is the critical angle in the context of total internal reflection?",
      "options": ["90 degrees", "45 degrees", "0 degrees", "Random degrees"],
      "correctAnswer": "90 degrees",
      "level": "Easy",
      "type": "Understand",
      "sublevel": 8
    },
    {
      "question": "What type of lens is used to converge light rays?",
      "options": ["Convex lens", "Concave lens", "Plano-convex lens", "Plano-concave lens"],
      "correctAnswer": "Convex lens",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 9
    },
    {
      "question": "In which medium does light travel with the highest speed?",
      "options": ["Air", "Water", "Glass", "Diamond"],
      "correctAnswer": "Air",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 10
    },
    {
      "question": "Explain the term 'apparent depth' in the context of refraction.",
      "options": ["Actual depth", "Perceived depth", "Depth without refraction", "No depth"],
      "correctAnswer": "Perceived depth",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 51
    },
    {
      "question": "Discuss the factors affecting the refractive index of a medium.",
      "options": ["Temperature", "Pressure", "Density", "All of the above"],
      "correctAnswer": "All of the above",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 52
    },
    {
      "question": "Explain the concept of lateral displacement in refraction.",
      "options": ["Vertical displacement", "Horizontal displacement", "No displacement", "Random displacement"],
      "correctAnswer": "Horizontal displacement",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 53
    },
    {
      "question": "What is the role of a lens in the formation of an image?",
      "options": ["Converge light rays", "Diverge light rays", "Block light rays", "Random role"],
      "correctAnswer": "Converge light rays",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 54
    },
    {
      "question": "Explain the conditions required for total internal reflection to occur.",
      "options": ["High refractive index", "Low refractive index", "Angle of incidence less than the critical angle", "Angle of incidence greater than the critical angle"],
      "correctAnswer": "Angle of incidence greater than the critical angle",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 55
    },
    {
      "question": "Discuss the phenomenon of dispersion of light and its causes.",
      "options": ["Scattering of light", "Bending of light", "Splitting of light into colors", "No dispersion"],
      "correctAnswer": "Splitting of light into colors",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 56
    },
    {
      "question": "What is the role of a prism in the dispersion of light?",
      "options": ["Converge light", "Diverge light", "Split light into colors", "Block light"],
      "correctAnswer": "Split light into colors",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 57
    },
    {
      "question": "Explain the concept of chromatic aberration in lenses.",
      "options": ["Focusing all colors at the same point", "Focusing different colors at different points", "No focusing", "Random focusing"],
      "correctAnswer": "Focusing different colors at different points",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 58
    },
    {
      "question": "Discuss the applications of lenses in everyday life.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 59
    },
    {
      "question": "Explain the concept of mirage and its causes.",
      "options": ["Reflection of light", "Refraction of light", "Dispersion of light", "Diffraction of light"],
      "correctAnswer": "Refraction of light",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 60
    },
    {
      "question": "Discuss the principles of Snell's Law and its mathematical representation.",
      "options": ["Angle of incidence equals angle of reflection", "Angle of incidence plus angle of reflection equals 180 degrees", "n1sinθ1 = n2sinθ2", "Random equation"],
      "correctAnswer": "n1sinθ1 = n2sinθ2",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 101
    },
    {
      "question": "Explain the concept of optical density and its role in refraction.",
      "options": ["High density means low refractive index", "Low density means high refractive index", "No density impact", "Random density impact"],
      "correctAnswer": "High density means low refractive index",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 102
    },
    {
      "question": "Discuss the applications of total internal reflection in optical fibers.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 103
    },
    {
      "question": "Explain the phenomenon of atmospheric refraction and its effects.",
      "options": ["Bending of starlight", "Distortion of celestial bodies", "No atmospheric refraction", "Random atmospheric refraction"],
      "correctAnswer": "Bending of starlight",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 104
    },
    {
      "question": "Discuss the principles of multiple refraction and its consequences.",
      "options": ["Formation of rainbows", "Creation of optical illusions", "No multiple refraction", "Random consequences"],
      "correctAnswer": "Creation of optical illusions",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 105
    },
    {
      "question": "Explain the concept of total dispersion in prisms.",
      "options": ["Complete dispersion of light", "Partial dispersion of light", "No dispersion", "Random dispersion"],
      "correctAnswer": "Complete dispersion of light",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 106
    },
    {
      "question": "Discuss the principles of wave optics and its relevance to light refraction.",
      "options": ["Particle theory of light", "Wave theory of light", "No theory of light", "Random theory"],
      "correctAnswer": "Wave theory of light",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 107
    },
    {
      "question": "Explain the concept of Huygens' principle in the context of light refraction.",
      "options": ["Every point of a wavefront acts as a source of secondary wavelets", "Every point of a wavefront absorbs light", "No wavelets", "Random wavelets"],
      "correctAnswer": "Every point of a wavefront acts as a source of secondary wavelets",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 108
    }]


    
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