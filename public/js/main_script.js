// import questionBank from "./Question_with_level.js";
import chapter1 from './Question Bank/gravitation_que.js'
import chapter2 from './Question Bank/Periodic_Classification_of_Element.js'
import chapter3 from './Question Bank/Chemical_Reactions_and_Equations.js'
import chapter4 from './Question Bank/Effects_of_Electric_Current.js'
import chapter5 from './Question Bank/Heat.js'
import chapter6 from './Question Bank/Refraction_of_Light.js'
import chapter7 from './Question Bank/Lenses.js'
import chapter8 from './Question Bank/Metallurgy.js'
import chapter9 from './Question Bank/Carbon_Compounds.js'
import chapter10 from './Question Bank/Space_Missions.js'
import chapter11 from './Question Bank/Heredity_and_Evolution.js'
import chapter12 from './Question Bank/Life_Processes_in_Living_Organisms_Part_1.js'
import chapter13 from './Question Bank/Life_Processes_in_Living_Organisms_Part_2.js'
import chapter14 from './Question Bank/Environmental_Management.js'
import chapter15 from './Question Bank/Towards_Green_Energy.js'
import chapter16 from './Question Bank/Animal_Classification.js'
import chapter17 from './Question Bank/Introduction_to_Microbiology.js'
import chapter18 from './Question Bank/Cell_Biology_and_Biotechnology.js'
import chapter19 from './Question Bank/Social_Health.js'
import chapter20 from './Question Bank/Disaster_Management.js'
import InitialRespose from "./initialResponse.js";
let questionBank ;
const question = document.getElementById('question');
const optionA = document.getElementById('a');
const optionB = document.getElementById('b');
const optionC = document.getElementById('c');
const optionD = document.getElementById('d');
const save_next = document.getElementById(`save_next`);
const clear = document.getElementById(`clear`);
const skip_ans_later = document.getElementById(`skip_answer_later`);
const buttonContainer = document.getElementById('status-button');
const level_tag = document.getElementById('level');
const sublevel_tag = document.getElementById('sublevel');
const correct_tag = document.getElementById('correct');
// // time decreasing code *********************
const show_time = document.getElementById('timer');
const TEST_TIME = 30*60; 
const numberOfQuestion = 10;

let hours = Math.floor(TEST_TIME / 3600);
let minutes = Math.floor((TEST_TIME % 3600) / 60);
let seconds = TEST_TIME % 60;
let intervalID;
let total_time=0;
let previous_time=0;

let question_visit =0;
let Score = [];
let correct =0;
let incorrect =0;
let easy=0;
let medium =0; 
let hard =0;
let totalScore =0;
let selectedOption=-1;
let levels=[0,0,0];
let level_itr=0;

let question_count=0;
let chapter=0;


function decodeBase64(value) {
    return atob(value);
}
function decodeDataFromUrl() {
    // const urlParams = new URLSearchParams(window.location.search);
    // const encodedData = urlParams.get('d');
    // const data = JSON.parse(atob(encodedData));

    // // Assign decoded data to the same variable names
    //  question_count = data.qc;
    //  chapter = data.ch;


    const urlParams = new URLSearchParams(window.location.search);
        const encodedquestion_count = urlParams.get('question_count');
        const encodedchapter = urlParams.get('chapter');
    
        // Assign decoded data to the same variable names
         question_count = parseInt(decodeBase64(encodedquestion_count));
         chapter = parseInt(decodeBase64(encodedchapter));

    // Now you can use 'question_count' and 'chapter'
    console.log(question_count, chapter);
}
decodeDataFromUrl()

if (chapter === 1) {
    questionBank = chapter1;
} else if (chapter === 2) {
    questionBank = chapter2;
} else if (chapter === 3) {
    questionBank = chapter3;
} else if (chapter === 4) {
    questionBank = chapter4;
} else if (chapter === 5) {
    questionBank = chapter5;
} else if (chapter === 6) {
    questionBank = chapter6;
} else if (chapter === 7) {
    questionBank = chapter7;
} else if (chapter === 8) {
    questionBank = chapter8;
} else if (chapter === 9) {
    questionBank = chapter9;
} else if (chapter === 10) {
    questionBank = chapter10;
} else if (chapter === 11) {
    questionBank = chapter11;
} else if (chapter === 12) {
    questionBank = chapter12;
} else if (chapter === 13) {
    questionBank = chapter13;
} else if (chapter === 14) {
    questionBank = chapter14;
} else if (chapter === 15) {
    questionBank = chapter15;
} else if (chapter === 16) {
    questionBank = chapter16;
} else if (chapter === 17) {
    questionBank = chapter17;
} else if (chapter === 18) {
    questionBank = chapter18;
} else if (chapter === 19) {
    questionBank = chapter19;
} else  {
    questionBank = chapter20;
}


// update clock after every sec
function updateClock() {
    ++total_time;
        if(minutes<0)
        minutes=59;
        if(seconds>0){
        seconds--;
    }else{
        seconds=59;
        if(minutes>0){
            minutes--;
        }else{
                minutes=59;
                hours--;
            }
    }
    if(hours<0){
        clearInterval(intervalID);
    }else{
        const timeString = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        show_time.textContent = timeString;
    }
}
updateClock();
intervalID=setInterval(updateClock,1000);
// #############################################################################
// Number of circular buttons you want to create



// Container where the buttons will be added

 
let respose = [];
let index_itr=0;

for (let i = 1; i <= numberOfQuestion; i++) {
    const button = document.createElement('button');
    button.className = 'circular-button';
    button.id = `que${i}`;
    button.innerText = i; 
    button.style.display = 'inline-block';
    button.addEventListener('click',()=>{
        loadQuestion(i);
    });
    buttonContainer.appendChild(button);
}



function apply3DLook() {    
    this.style.transform = 'translateY(2px)';
    this.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.5)';
}
function remove3DLook() {
    this.style.transform = '';
    this.style.boxShadow = '';
}

let visited_array = [];

function loadQuestion(num) {
    index_itr = num;
    

    removeAllOptionStyles();
    if (num >= 0 && num <= questionBank.length) {
        if (!visited_array.includes(num)) {
            // If the question is not visited, load it
            ++question_visit;
            selectedOption = -1;
            question.textContent = questionBank[num].question;
            optionA.textContent = questionBank[num].options[0];
            optionB.textContent = questionBank[num].options[1];
            optionC.textContent = questionBank[num].options[2];
            optionD.textContent = questionBank[num].options[3];
            // correctAnswer = questionBank[num].correctAnswer;
            level_tag.textContent="Level : " + questionBank[num].level;
            sublevel_tag.textContent="Sublevel : "+ questionBank[num].sublevel;
            correct_tag.textContent = "Correct : "+ correct;

            // Mark the question as visited
            visited_array.push(num);
        } else {
            // If the question is already visited, find the next level
            console.log("Visited");
            let newLevel = findNextLevel(questionBank[num].sublevel);
            if(newLevel>100)
            newLevel%=questionBank.length;
            console.log("newLevel : " + newLevel);
            findQueFromLevel(newLevel);
        }
    }
}

function findNextLevel(currentLevel) {
    // If the currentLevel % 10 is in between 0 to 5, decrease it by 1; otherwise, increase it by 1
    if (currentLevel % 10 >= 0 && currentLevel % 10 < 5) {
        return currentLevel + Math.random()*3;
    } else
    if(currentLevel % 10 < 5)
     {
        return currentLevel - Math.random()*3;
    }
    else{
        return currentLevel - Math.random()*7;
    }
}

function checkAnswer(index,selectedOption) {
    if (questionBank[index].options[selectedOption].trim() === questionBank[index].correctAnswer.trim()) {
        return 1;
    } else {        
        return 0;
    }
}

function timeRequired(){
    let time_requi = total_time - previous_time;
    previous_time = total_time;
    return time_requi;
}
function applyOptionStyle() {
    // Remove background color from all options
    removeAllOptionStyles();

    // Apply background color to the clicked option
    this.style.backgroundColor = "#8eff8e"; // Light green color
}

// Function to remove specific style from all options
function removeAllOptionStyles() {
    optionA.style.backgroundColor = "";
    optionB.style.backgroundColor = "";
    optionC.style.backgroundColor = "";
    optionD.style.backgroundColor = "";
}
optionA.addEventListener('mousedown', apply3DLook);
optionA.addEventListener('mouseup', function () {
    remove3DLook.call(this);
    applyOptionStyle.call(this);
    selectedOption = 0;
});

optionB.addEventListener('mousedown', apply3DLook);
optionB.addEventListener('mouseup', function () {
    remove3DLook.call(this);
    applyOptionStyle.call(this);
    selectedOption = 1;

});

optionC.addEventListener('mousedown', apply3DLook);
optionC.addEventListener('mouseup', function () {
    remove3DLook.call(this);
    applyOptionStyle.call(this);
    selectedOption = 2; 
});

optionD.addEventListener('mousedown', apply3DLook);
optionD.addEventListener('mouseup', function () {
    remove3DLook.call(this);
    applyOptionStyle.call(this);
    selectedOption = 3;
});

function backgroundService() {
    console.log('Background service is running...');

    // Your update logic goes here
    if (selectedOption === -1 || question_visit > 20) {
        // Disable the button
        save_next.disabled = true;
    
        // Change the button color to a disabled color (e.g., light gray)
        save_next.style.backgroundColor = '#dddddd'; // Replace with your desired color
    } else {
        // Enable the button
        save_next.disabled = false;
    
        // Reset the button color to its default
        save_next.style.backgroundColor = '#ff6600'; // Use an empty string to reset to default
    }
    // Schedule the next update
    setTimeout(backgroundService, 500);
}

// Start the initial background service
backgroundService();


save_next.addEventListener('click',()=>{
    let correctness=checkAnswer(index_itr,selectedOption);
    let time = timeRequired();
    let weight = questionBank[index_itr].sublevel;
    
    calculate_score(Number.parseInt(weight),correctness,time);    
});

// previous.addEventListener('click',()=>{
//     loadQuestion(--count);
// });

clear.addEventListener('click',()=>{
    
    
});

skip_ans_later.addEventListener('click',()=>{
    calculate_score(0,0,0);
});



function findQueFromLevel(level){

    level = Math.ceil(level);
    if (question_visit > 20) {
        // Disable the button
        save_next.disabled = true;
    
        // Change the button color to a disabled color (e.g., light gray)
        save_next.style.backgroundColor = '#dddddd'; // Replace with your desired color
        
    }
    
    let isQueLoaded = false;
    console.log("level : "+level + " "+typeof(level));
    for(let i=0;i<questionBank.length;i++){
        if(questionBank[i].sublevel==(level)){
            isQueLoaded = true;
            console.log("Que found");
            if(question_visit <= 20)
            loadQuestion(i);
            
        }
    }
    if(isQueLoaded==false){
        console.log("Que Not found");
        if(level>questionBank.length)
        findQueFromLevel(level-Math.ceil(Math.random()*2));
        else
        if(level<=0)
        findQueFromLevel(level+Math.random()*2);
    }
}
// load first que
findQueFromLevel(15);
// use to find the level of next que

function calculate_score(weight,correctness,time){
    console.log("weight = "+weight + " "+typeof(weight));
    console.log("Question No. "+question_visit);
    let avg_time = 30 + weight*2;
    let level_value =   correctness*(weight * (1-(Math.min(time,avg_time-0.01)/avg_time)));

    Score.push(level_value);
    totalScore +=level_value;
    levels[level_itr] = level_value;
    level_itr=(level_itr+1)%3;
    
    if(correctness==1)
    correct++;
    else
    incorrect++;

    if(weight>20)
    hard++;
    else
    if(weight>10)
    medium++;
    else
    easy++

    let que_level = Math.ceil((levels[0] + levels[1] + levels[2]) / 3);

    if(question_visit<3)
    loadQuestion(weight+Math.ceil(Math.random()*2));
    else
    findQueFromLevel(que_level);

    

}

function encodeBase64(value) {
    return btoa(value);
}

function visitDashboard(){
    // Encode the parameters
    const encodedScore = encodeBase64(JSON.stringify(Score));
    const encodedCorrect = encodeBase64(correct.toString());
    const encodedIncorrect = encodeBase64(incorrect.toString());
    const encodedEasy = encodeBase64(easy.toString());
    const encodedMedium = encodeBase64(medium.toString());
    const encodedHard = encodeBase64(hard.toString());
    const encodedTotalScore = encodeBase64(totalScore.toString());

    // Construct the obfuscated URL
    const obfuscatedURL = `/dashboard.html?score=${encodedScore}&correct=${encodedCorrect}&incorrect=${encodedIncorrect}&easy=${encodedEasy}&medium=${encodedMedium}&hard=${encodedHard}&totalScore=${encodedTotalScore}`;

    // Replace the current URL without triggering a page reload
    history.replaceState(null, null, obfuscatedURL);

    // Navigate to the obfuscatedURL
    window.location.href = obfuscatedURL;
}

document.getElementById('submit').addEventListener('click', function() {
   visitDashboard();
});


localStorage.setItem('Score', Score);

export {Score};