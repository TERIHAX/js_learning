/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div
let billInputDiv = document.getElementById("billTotalInput");
let tipInputDiv = document.getElementById("tipInput");
let peopleAmtDiv = document.getElementById("numberOfPeople");
let perPersonTotalDiv = document.getElementById("perPersonTotal");

function calculateBill() {
    perPersonTotalDiv.innerText = `$${+billInputDiv.value + +tipInputDiv.value / 100 / +peopleAmtDiv.value}`;
}

// ** Splits the bill between more people **
function increasePeople() {    
    // increment the amount of people


    // update the DOM with the new number of people
    peopleAmtDiv.value = (+peopleAmtDiv.value)++;    

    // calculate the bill based on the new number of people
    calculateBill();
}

// ** Splits the bill between fewer people **
function decreasePeople() {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)


    // decrement the amount of people


    // update the DOM with the new number of people


    // calculate the bill based on the new number of people

}