// Creating a page where every time the user hits the "Roll Dice" button,
// the screen randomly updates the two dice.
// Use the html and css code included in the starter code folder to get started.
//
// 1) Write down pseudocode for the following program.
//
// 2) Follow the steps below to write your code.
//
// * generate a random number between 1 - 6 and store to a variable, random1 (remember Math.random)
// * generate a random number between 1 - 6 and store to a variable, random2

document.getElementById('roll-dice').onclick =

diceRoll => {
//
let random1 = Math.floor((Math.random() * 6) + 1)
let random2 = Math.floor((Math.random() * 6) + 1)
//
// * combine 'dice-' and random1 to form the random class for the first die, firstDie (the styles.css file will give you a clue)
// * combine 'dice-' and random2 to form the random class for the second die, secondDie
//
let firstDie = `dice-${random1}`
let secondDie = `dice-${random2}`
//
// * get the first die by ID and update the class to firstDie (hint: document.getElementById)
// * get the first die by ID and update the class to secondDie (hint:document.getElementById)
//
document.getElementById('first-die').className = firstDie
document.getElementById('second-die').className = secondDie
//
};
//3) Check to see if the Dice Roll has been hit, if it has run the diceRoll function.
