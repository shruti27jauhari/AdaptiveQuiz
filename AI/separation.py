import re

def classify_question(question):
    keywords = {
        'knowledge': ['define', 'identify', 'describe', 'recognize', 'tell', 'explain', 'recite', 'memorize', 'illustrate', 'quote'],
        'understand': ['summarize', 'interpret', 'classify', 'compare', 'contrast', 'infer', 'relate', 'extract', 'paraphrase', 'cite'],
        'apply': ['solve', 'change', 'relate', 'complete', 'use', 'sketch', 'teach', 'articulate', 'discover', 'transfer'],
        'analyze': ['contrast', 'connect', 'relate', 'devise', 'correlate', 'illustrate', 'distill', 'conclude', 'categorize', 'take apart'],
        'evaluate': ['criticize', 'reframe', 'judge', 'defend', 'appraise', 'value', 'prioritize', 'plan', 'grade', 'reframe'],
        'create': ['design', 'modify', 'role-play', 'develop', 'rewrite', 'pivot', 'modify', 'collaborate', 'invent', 'write']
    }
    
    question_lower = question.lower()
    
    for level, level_keywords in keywords.items():
        if any(keyword in question_lower for keyword in level_keywords):
            return level
    
    return 'unknown'

# Example usage
if __name__ == "__main__":
    question = sys.argv[1]
    classification = classify_question(question)
    print(f"The question is classified as: {classification.capitalize()} level.")


