/* Define global variables */
let num1;
let num2;

/**
 * Function for when addition mode is selected by the user.
 * Loads numbers into answer window
 */
function selectAddition() {
    console.log("add button clicked");
    loadRandomNumbers();
}

/* Add event listeners */
document.getElementById('addition-btn').addEventListener('click', selectAddition);
document.getElementById('submit-btn').addEventListener('click', checkAnswer);

/**
 * Function loads two random numbers into the answer box
 */
function loadRandomNumbers() {
    num1 = getRandomInt(20);
    num2 = getRandomInt(20);
    
    document.getElementById('first-num').innerHTML = num1;
    document.getElementById('second-num').innerHTML = num2;
    console.log("numbers loaded");
}

/**
 * Function takes an integer for the max variable
 * returns a random int between 0 and the max range
 * @param {integer} max 
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function checkAnswer() {
    let answer = document.getElementById('answer').value;
    if (num1 + num2 == answer){
        console.log("correct!");
    } else {
        console.log("incorrect!");
    }
}