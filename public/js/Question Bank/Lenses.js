const data = [
    {
      "question": "What type of lens converges light rays?",
      "options": ["Concave lens", "Convex lens", "Bifocal lens", "Cylindrical lens"],
      "correctAnswer": "Convex lens",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 1
    },
    {
      "question": "What is the focal point of a convex lens?",
      "options": ["In front of the lens", "Behind the lens", "On the lens", "No focal point"],
      "correctAnswer": "In front of the lens",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 2
    },
    {
      "question": "What type of lens diverges light rays?",
      "options": ["Concave lens", "Convex lens", "Bifocal lens", "Cylindrical lens"],
      "correctAnswer": "Concave lens",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 3
    },
    {
      "question": "What is the focal point of a concave lens?",
      "options": ["In front of the lens", "Behind the lens", "On the lens", "No focal point"],
      "correctAnswer": "Behind the lens",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 4
    },
    {
      "question": "What is the power of a lens measured in?",
      "options": ["Watts", "Volts", "Diopters", "Amperes"],
      "correctAnswer": "Diopters",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 5
    },
    {
      "question": "In a convex lens, where is the image formed when the object is beyond the focal point?",
      "options": ["In front of the lens", "Behind the lens", "On the lens", "No image formed"],
      "correctAnswer": "Behind the lens",
      "level": "Easy",
      "type": "Understand",
      "sublevel": 6
    },
    {
      "question": "What is the phenomenon where a lens forms multiple images of a single object?",
      "options": ["Refraction", "Reflection", "Dispersion", "Aberration"],
      "correctAnswer": "Aberration",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 7
    },
    {
      "question": "Which type of lens is used to correct nearsightedness?",
      "options": ["Concave lens", "Convex lens", "Bifocal lens", "Cylindrical lens"],
      "correctAnswer": "Concave lens",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 8
    },
    {
      "question": "What is the term for the bending of light as it passes through a lens?",
      "options": ["Diffraction", "Dispersion", "Refraction", "Reflection"],
      "correctAnswer": "Refraction",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 9
    },
    {
      "question": "What is the relationship between the focal length and the power of a lens?",
      "options": ["Inverse", "Direct", "No relationship", "Random relationship"],
      "correctAnswer": "Inverse",
      "level": "Easy",
      "type": "Understand",
      "sublevel": 10
    },
    {
      "question": "Explain the concept of lens formula and its components.",
      "options": ["Focal length and power", "Object distance and image distance", "Refraction and reflection", "No formula"],
      "correctAnswer": "Object distance and image distance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 51
    },
    {
      "question": "What is the magnification of a lens?",
      "options": ["Size of the object", "Size of the image", "Size of the lens", "No size change"],
      "correctAnswer": "Size of the image",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 52
    },
    {
      "question": "Explain the difference between a real image and a virtual image formed by a lens.",
      "options": ["Real formed on a screen", "Virtual not formed on a screen", "No difference", "Random difference"],
      "correctAnswer": "Real formed on a screen, Virtual not formed on a screen",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 53
    },
    {
      "question": "What is the relationship between the radius of curvature and the focal length of a lens?",
      "options": ["Equal", "Not related", "Inverse", "Random relationship"],
      "correctAnswer": "Equal",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 54
    },
    {
      "question": "Discuss the concept of lens aberrations and their impact on image formation.",
      "options": ["No impact", "Impact on image clarity", "Impact on image size", "Random impact"],
      "correctAnswer": "Impact on image clarity",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 55
    },
    {
      "question": "What is the function of a converging lens in a magnifying glass?",
      "options": ["Magnify objects", "Minify objects", "No magnification", "Random function"],
      "correctAnswer": "Magnify objects",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 56
    },
    {
      "question": "Explain the concept of lens power and its application in corrective lenses.",
      "options": ["Correct vision", "Distort vision", "No impact on vision", "Random impact on vision"],
      "correctAnswer": "Correct vision",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 57
    },
    {
      "question": "What is the role of lens coatings in optical devices?",
      "options": ["Increase reflection", "Decrease reflection", "No impact on reflection", "Random impact on reflection"],
      "correctAnswer": "Decrease reflection",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 58
    },
    {
      "question": "Discuss the factors affecting the magnification produced by a lens.",
      "options": ["Focal length", "Object distance", "Image distance", "No factors"],
      "correctAnswer": "Focal length, Object distance, Image distance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 59
    },
    {
      "question": "Explain the working principle of a camera lens and its components.",
      "options": ["Shutter and aperture", "Focusing and zooming", "No components", "Random components"],
      "correctAnswer": "Focusing and zooming",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 60
    },
    {
      "question": "Discuss the principles of chromatic aberration in lenses and methods to reduce it.",
      "options": ["Increase chromatic aberration", "Decrease chromatic aberration", "No impact on chromatic aberration", "Random impact on chromatic aberration"],
      "correctAnswer": "Decrease chromatic aberration",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 101
    },
    {
      "question": "Explain the concept of lens apertures and their effects on image quality.",
      "options": ["Improve image quality", "Deteriorate image quality", "No impact on image quality", "Random impact on image quality"],
      "correctAnswer": "Improve image quality",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 102
    },
    {
      "question": "Discuss the principles of lens manufacturing and the impact on lens quality.",
      "options": ["High-quality manufacturing", "Low-quality manufacturing", "No impact on manufacturing", "Random impact on manufacturing"],
      "correctAnswer": "High-quality manufacturing",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 103
    },
    {
      "question": "Explain the working of contact lenses and their advantages over traditional glasses.",
      "options": ["Better vision correction", "Worse vision correction", "No impact on vision correction", "Random impact on vision correction"],
      "correctAnswer": "Better vision correction",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 104
    },
    {
      "question": "Discuss the principles of adaptive optics in telescopes and its applications.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 105
    },
    {
      "question": "Explain the concept of aspheric lenses and their advantages in optical devices.",
      "options": ["Less distortion", "More distortion", "No distortion", "Random distortion"],
      "correctAnswer": "Less distortion",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 106
    },
    {
      "question": "Discuss the principles of holographic lenses and their applications in imaging.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 107
    },
    {
      "question": "Explain the concept of liquid lenses and their applications in optics.",
      "options": ["Limited applications", "Extensive applications", "No applications", "Random applications"],
      "correctAnswer": "Extensive applications",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 108
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