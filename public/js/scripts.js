let questionCount = 0;

function addQuestion() {
    questionCount++;

    const questionContainer = document.getElementById('questions-container');

    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question-card', 'card', 'mt-3');
    questionDiv.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">Question ${questionCount}</h5>
            <textarea class="form-control mb-2" placeholder="Enter your question here"></textarea>
            <button class="btn btn-danger mr-2" onclick="removeQuestion(this)">Remove</button>
            <button class="btn btn-warning" onclick="regenerateQuestion(this)">Regenerate</button>
        </div>
    `;

    questionContainer.appendChild(questionDiv);
}

function removeQuestion(button) {
    const questionCard = button.closest('.question-card');
    questionCard.remove();
}

function regenerateQuestion(button) {
    // Logic to regenerate the question (replace with your own logic)
    alert("Question regenerated!");
}

function generatePaper() {
    // Logic to generate the question paper (replace with your own logic)
    const questionCards = document.querySelectorAll('.question-card');
    const questionTexts = Array.from(questionCards).map(card => card.querySelector('textarea').value);
    
    // Display or process the generated question paper as needed
    alert("Question Paper Generated:\n" + questionTexts.join('\n'));
}
