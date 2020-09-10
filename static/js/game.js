/**
 * Function for when addition is selected by the user.
 * Loads numbers and answer window
 */
function selectAddition() {
    console.log("add button clicked");
    loadRandomNumbers();
}

/* Add event listeners */
document.getElementById('addition-btn').addEventListener('click', selectAddition);

/**
 * Function loads two random numbers into the answer box
 */
function loadRandomNumbers() {
    let num1 = getRandomInt(20);
    let num2 = getRandomInt(20);
    
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