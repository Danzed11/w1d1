var terminalOutput = process.argv.slice(2);


function diceRoll () { //Generates an integer of a 6 sided roll
    return Math.floor(Math.random() * Math.floor(6)) + 1;
}
function multipleDice(amount, diceRoll) { // Rolling dice multiple times
    var output = "";
    for (var i = 0; i < amount; i++) {
        output += diceRoll(); //Talking to diceroll parameters IN multipleDice.
    }
    return output;
}
console.log("Rolled " + terminalOutput + " dice: " + multipleDice(terminalOutput, diceRoll).split("").join(", "));

// PETERS WAY

// //var myArgv = process.argv.slice(2);
// function diceRoller() {
//     var text = "";
//     for (var i = 0; i < myArgv; i++) {
//       text += Math.ceil(Math.random() * 6);
//     }
//     return text;
// }
// console.log("Rolled " + myArgv + " " + "dice: " + diceRoller(myArgv).split("").join(", "));