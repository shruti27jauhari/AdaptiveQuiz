const data = [
    {
      "question": "Who is considered the father of modern genetics?",
      "options": ["Charles Darwin", "Gregor Mendel", "Alfred Wallace", "Thomas Morgan"],
      "correctAnswer": "Gregor Mendel",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 1
    },
    {
      "question": "What is the term for the physical appearance of an organism?",
      "options": ["Genotype", "Phenotype", "Allele", "Homozygous"],
      "correctAnswer": "Phenotype",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 2
    },
    {
      "question": "Which genetic disorder is characterized by the absence of one X chromosome in females?",
      "options": ["Hemophilia", "Down syndrome", "Turner syndrome", "Cystic fibrosis"],
      "correctAnswer": "Turner syndrome",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 3
    },
    {
      "question": "What is the term for the alternative forms of a gene at a specific locus?",
      "options": ["Allele", "Genotype", "Phenotype", "Homozygous"],
      "correctAnswer": "Allele",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 4
    },
    {
      "question": "Which law states that alleles segregate independently during the formation of gametes?",
      "options": ["Law of Segregation", "Law of Independent Assortment", "Law of Dominance", "Law of Co-dominance"],
      "correctAnswer": "Law of Independent Assortment",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 5
    },
    {
      "question": "What is the term for the specific location of a gene on a chromosome?",
      "options": ["Phenotype", "Genotype", "Locus", "Homozygous"],
      "correctAnswer": "Locus",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 6
    },
    {
      "question": "In Mendel's experiments, what term refers to the parental generation?",
      "options": ["F1 generation", "F2 generation", "P generation", "F0 generation"],
      "correctAnswer": "P generation",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 7
    },
    {
      "question": "Which genetic disorder is characterized by the presence of an extra 21st chromosome?",
      "options": ["Hemophilia", "Down syndrome", "Turner syndrome", "Cystic fibrosis"],
      "correctAnswer": "Down syndrome",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 8
    },
    {
      "question": "What is the term for the genetic makeup of an organism?",
      "options": ["Genotype", "Phenotype", "Allele", "Homozygous"],
      "correctAnswer": "Genotype",
      "level": "Easy",
      "type": "Remember",
      "sublevel": 9
    },
    {
      "question": "What is the probability of obtaining a heterozygous offspring from a cross between two heterozygous parents?",
      "options": ["25%", "50%", "75%", "100%"],
      "correctAnswer": "50%",
      "level": "Easy",
      "type": "Apply",
      "sublevel": 10
    },
    {
      "question": "Explain Mendel's Law of Segregation with the help of a Punnett square.",
      "options": ["Punnett square not needed", "Punnett square needed", "No segregation explanation", "Random explanation"],
      "correctAnswer": "Punnett square needed",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 51
    },
    {
      "question": "Discuss the concept of incomplete dominance in genetics.",
      "options": ["Limited discussion", "Extensive discussion", "No discussion", "Random discussion"],
      "correctAnswer": "Extensive discussion",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 52
    },
    {
      "question": "Explain the role of sex chromosomes in determining the sex of an individual.",
      "options": ["Limited explanation", "Extensive explanation", "No explanation", "Random explanation"],
      "correctAnswer": "Extensive explanation",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 53
    },
    {
      "question": "Discuss the significance of multiple alleles in genetic variation.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 54
    },
    {
      "question": "Explain the concept of codominance with examples.",
      "options": ["Examples not needed", "Examples needed", "No codominance explanation", "Random explanation"],
      "correctAnswer": "Examples needed",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 55
    },
    {
      "question": "Discuss the environmental factors influencing evolution.",
      "options": ["Limited factors", "Extensive factors", "No factors", "Random factors"],
      "correctAnswer": "Extensive factors",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 56
    },
    {
      "question": "Explain the concept of genetic drift and its role in small populations.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 57
    },
    {
      "question": "Discuss the impact of mutations on the evolution of species.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 58
    },
    {
      "question": "Explain the role of natural selection in the process of evolution.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 59
    },
    {
      "question": "Discuss the concept of adaptive radiation and provide examples.",
      "options": ["Examples not needed", "Examples needed", "No adaptive radiation explanation", "Random explanation"],
      "correctAnswer": "Examples needed",
      "level": "Medium",
      "type": "Understand",
      "sublevel": 60
    },
    {
      "question": "Explain the process of genetic recombination and its significance in evolution.",
      "options": ["Limited significance", "Extensive significance", "No significance", "Random significance"],
      "correctAnswer": "Extensive significance",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 101
    },
    {
      "question": "Discuss the concept of Hardy-Weinberg equilibrium and the conditions for its maintenance.",
      "options": ["Limited conditions", "Extensive conditions", "No conditions", "Random conditions"],
      "correctAnswer": "Extensive conditions",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 102
    },
    {
      "question": "Explain the role of reproductive isolation in the formation of new species.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 103
    },
    {
      "question": "Discuss the impact of artificial selection on the evolution of domesticated plants and animals.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 104
    },
    {
      "question": "Explain the concept of coevolution and provide examples from nature.",
      "options": ["Examples not needed", "Examples needed", "No coevolution explanation", "Random explanation"],
      "correctAnswer": "Examples needed",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 105
    },
    {
      "question": "Discuss the role of molecular biology in studying evolutionary relationships.",
      "options": ["Limited role", "Extensive role", "No role", "Random role"],
      "correctAnswer": "Extensive role",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 106
    },
    {
      "question": "Explain the concept of gene flow and its impact on population genetics.",
      "options": ["Limited impact", "Extensive impact", "No impact", "Random impact"],
      "correctAnswer": "Extensive impact",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 107
    },
    {
      "question": "Discuss the challenges in preserving biodiversity and the importance of conservation.",
      "options": ["Limited importance", "Extensive importance", "No importance", "Random importance"],
      "correctAnswer": "Extensive importance",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 108
    },
    {
      "question": "Explain the concept of molecular clocks in evolutionary biology.",
      "options": ["Limited explanation", "Extensive explanation", "No explanation", "Random explanation"],
      "correctAnswer": "Extensive explanation",
      "level": "Difficult",
      "type": "Understand",
      "sublevel": 109
    },
    {
      "question": "Discuss the ethical considerations in genetic engineering and cloning.",
      "options": ["Limited considerations", "Extensive considerations", "No considerations", "Random considerations"],
      "correctAnswer": "Extensive considerations",
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