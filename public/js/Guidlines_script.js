const read = document.getElementById('acknowledge');
const start = document.getElementById('proceedButton');
read.addEventListener('change',()=>{    
        start.disabled=!read.checked;
        console.log(read.checked);
});
let question_count ,chapter;
function encodeBase64(value) {
        return btoa(value);
    }
document.getElementById('proceedButton').addEventListener('click', function() {
        // Post a request to the /dashboard endpoint
         decodeDataFromUrl();
        //  const encodedData = btoa(JSON.stringify({
        //         qc: question_count,
        //         ch: chapter
        //     }));
        
        //     // Obfuscated URL
        //     window.location.href = `/main.html?d=${encodedData}`;

        const encodedQuestionCount = encodeBase64(question_count.toString());
        const encodedChapter = encodeBase64(chapter.toString());
        const obfuscatedURL = `/main.html?qc=${encodedQuestionCount}&ch=${encodedChapter}`;
        history.replaceState(null, null, obfuscatedURL);

        // Navigate to the obfuscatedURL
        window.location.href = obfuscatedURL;
        
      });

      
function decodeBase64(value) {
    return atob(value);
}

// Use this function to decode the data from the URL
function decodeDataFromUrl() {
        const urlParams = new URLSearchParams(window.location.search);
        const encodedquestion_count = urlParams.get('question_count');
        const encodedchapter = urlParams.get('chapter');
    
        // Assign decoded data to the same variable names
         question_count = parseInt(decodeBase64(encodedquestion_count));
         chapter = parseInt(decodeBase64(encodedchapter));
    
        // Now you can use 'question_count' and 'chapter'
        console.log(question_count, chapter);
    }
    
    // Call this function to get and decode the data
    