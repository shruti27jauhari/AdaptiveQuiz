// import Score from "./main_script";
// Extract values from the URL query parameters
const urlParams = new URLSearchParams(window.location.search);
function decodeBase64(value) {
    return atob(value);
}

// Retrieve the encoded parameters from the URL
const encodedScore = urlParams.get('score');
const encodedCorrect = urlParams.get('correct');
const encodedIncorrect = urlParams.get('incorrect');
const encodedEasy = urlParams.get('easy');
const encodedMedium = urlParams.get('medium');
const encodedHard = urlParams.get('hard');
const encodedTotalScore = urlParams.get('totalScore');

// Decode the parameters
const scoreString = decodeBase64(encodedScore);
const correctString = decodeBase64(encodedCorrect);
const incorrectString = decodeBase64(encodedIncorrect);
const easyString = decodeBase64(encodedEasy);
const mediumString = decodeBase64(encodedMedium);
const hardString = decodeBase64(encodedHard);
const totalScoreString = decodeBase64(encodedTotalScore);
// Parse the values back to their respective types
const Score = JSON.parse(decodeURIComponent(scoreString));
const correct = parseInt(correctString);
const incorrect = parseInt(incorrectString);
const easy = parseInt(easyString);
const medium = parseInt(mediumString);
const hard = parseInt(hardString);
const totalScore = parseInt(totalScoreString);


document.getElementById('easyScore').textContent = easy.toString();
document.getElementById('mediumScore').textContent = medium.toString();
document.getElementById('hardScore').textContent = hard.toString();
document.getElementById('totalScore').textContent = totalScore.toString();
console.log(Score);


document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for the pie chart
    const pieChartData = {
        labels: ['Correct', 'Wrong'],
        datasets: [{
            data: [correct, incorrect], // Replace with actual data
            backgroundColor: ['#4CAF50', '#FF5733'],
        }],
    };

    // Dummy data for the line chart
    const scoreLabels = Array.from({ length: Score.length }, (_, index) => `Q${index + 1}`);

// Create the line chart data
const lineChartData = {
    labels: scoreLabels,
    datasets: [{
        label: 'Performance',
        data: Score,
        borderColor: '#3498db',
        borderWidth: 2,
        fill: false,
    }],
};

    // Create Pie Chart
    const pieChartCtx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(pieChartCtx, {
        type: 'pie',
        data: pieChartData,
    });

    // Create Line Chart
    const lineChartCtx = document.getElementById('lineChart').getContext('2d');
    const lineChart = new Chart(lineChartCtx, {
        type: 'line',
        data: lineChartData,
    });
});

const baseUrl = 'http://localhost:3001/';
async function getInfo(){
    const res = await fetch(baseUrl,
        {
            method:'GET'
        })
        console.log(res);

}

