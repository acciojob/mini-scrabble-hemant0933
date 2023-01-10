//your code here
let inputField = document.getElementById("evaluatedText");
let letterCount = document.getElementById("letterCount");

inputField.addEventListener("input" , function(){
    letterCount.textContent = inputField.value.length;
});