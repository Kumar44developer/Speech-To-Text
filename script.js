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
