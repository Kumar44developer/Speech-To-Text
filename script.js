const resultElement = document.getElementById("result");
let recognition;

function startConverting(){
    if('webkitSpeechRecognition' in window){
        recognition  = new webkitSpeechRecognition();
        setupRecognition(recognition);
        recognition.start();
    }
}
function setupRecognition(recognition){
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

recognition.onresult = function(event){
        const {finalTranscript , interTranscript } = processResult(event.results);
       resultElement.innerHTML = finalTranscript + interTranscript;
        
    }


}

function processResult(results){
