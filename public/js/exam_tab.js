// document.getElementById('startExamBtn').addEventListener('click', function () {
//     // You can add logic to navigate to the exam page or perform other actions
//     // alert('Exam started!');
//     window.location.href = '/Guidlines.html';
// });
let question_count = 20;
let chapter = 0;

// JavaScript file (e.g., script.js)

// Mapping of topic values to chapters
const chapterMapping = {
    "Gravitation": 1,
    "Periodic_Classification": 2,
    "Chemical_reactions": 3,
    "Effects_of_electric_current": 4,
    "Heat": 5,
    "Refraction_of_light": 6,
    "Lenses": 7,
    "Metallugy": 8,
    "Carbon_compounds": 9,
    "Space_Missions": 10,
    "Heredity_and_Evolution": 11,
    "Life_Processes_Part_1": 12,
    "Life_Processes_Part_2": 13,
    "Environmental_management": 14,
    "Towards_Green_Energy": 15,
    "Animal_Classification": 16,
    "Introduction_to_Microbiology": 17,
    "Cell_Biology_and_Biotechnology": 18,
    "Social_health": 19,
    "Disaster_Management": 20,
    // ... Add more mappings as needed
};

// Function to handle radio button selection
function handleRadioSelection() {
    // Get all radio buttons with name "topic"
    const radioButtons = document.getElementsByName("topic");

    // Find the selected radio button
    
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            chapter = chapterMapping[radioButton.value];
            break;
        }
    }

    // Log or use the 'selectedChapter' value as needed
    console.log("Selected Chapter:", chapter);
}



function encodeBase64(value) {
    return btoa(value);
}
function send_data_to_guidelines() {
    // const encodedData = btoa(JSON.stringify({
    //     qc: question_count,
    //     ch: chapter
    // }));
    // Encoding File


const encodedQuestionCount = encodeBase64(question_count.toString());
const encodedChapter = encodeBase64(chapter.toString());
const obfuscatedURL = `/Guidlines.html?qc=${encodedQuestionCount}&ch=${encodedChapter}`;

// Replace the current URL without triggering a page reload
history.replaceState(null, null, obfuscatedURL);

// Navigate to the obfuscatedURL
window.location.href = obfuscatedURL;



    // Obfuscated URL
    // window.location.href = `/Guidlines.html?d=${encodedData}`;
}

document.getElementById('startExamBtn').addEventListener('click', function () {
    // You can add logic to navigate to the exam page or perform other actions
    // alert('Exam started!');
    send_data_to_guidelines();
});


function updateTopicDetails() {
    var selectedTopic = document.querySelector('input[name="topic"]:checked');
    var topicDetails = document.getElementById('topicDetails');

    if (selectedTopic) {
        var topicName = selectedTopic.value;
        var tableHTML = `
            <table>
                <tr>
                    <th>Topic</th>
                    <th>Number of Questions</th>
                    <th>Time Limit</th>
                </tr>
                <tr>
                    <td>${topicName}</td>
                    <td>20</td>
                    <td>30 minutes</td>
                </tr>
            </table>`;
        topicDetails.innerHTML = tableHTML;
    } else {
        topicDetails.innerHTML = ''; // Clear details if no topic is selected
    }
}

function selectAllTopics() {
    var checkboxes = document.querySelectorAll('input[name="topic"]');
    var selectAllCheckbox = document.getElementById('select_all');
    var testOptions = document.getElementById('testOptions');

    if (selectAllCheckbox.checked) {
        // Display the test options for all topics
        var testOptionsHTML = `
            <div>
                <p>All Topics Selected:</p>
                <table>
                    <tr>
                        <th>Total Questions</th>
                        <th>Total Time</th>
                    </tr>
                    <tr>
                        <td>100</td>
                        <td>3 hours</td>
                    </tr>
                </table>
            </div>`;

        // Clear individual topic selections
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = false;
        });

        testOptions.innerHTML = testOptionsHTML;
    } else {
        testOptions.innerHTML = ''; // Clear test options if not selecting all topics
    }

    updateTopicDetails();
}

document.addEventListener('DOMContentLoaded', function () {
    var radioButtons = document.querySelectorAll('input[name="topic"]');
    radioButtons.forEach(function (radioButton) {
        radioButton.addEventListener('change', updateTopicDetails);
    });

    for (const radioButton of radioButtons) {
        radioButton.addEventListener("change", handleRadioSelection);
    }

    var selectAllCheckbox = document.getElementById('select_all');
    selectAllCheckbox.addEventListener('change', selectAllTopics);
});
