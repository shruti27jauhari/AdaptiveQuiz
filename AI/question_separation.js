import { exec } from '../node_modules/child_process';
import questionBank from "../database/question_bank.js";

function executePythonScript(inputQuestion) {
    return new Promise((resolve, reject) => {
        exec(`python3.12 separation.py "${inputQuestion}"`, (error, stdout, stderr) => {
            if (error) {
                reject(`Error: ${error.message}`);
            } else if (stderr) {
                reject(`Error: ${stderr}`);
            } else {
                const classification = stdout.trim();
                resolve(classification);
            }
        });
    });
}

async function processQuestions() {
    for (let i = 0; i < 30; i++) {
        try {
            let inputQuestion = questionBank[i].question;
            const classification = await executePythonScript(inputQuestion);
            console.log(`Classification for question ${i + 1}: ${classification}`);
        } catch (error) {
            console.error(error);
        }
    }
}

processQuestions();
