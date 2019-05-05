/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
var concepts = joinList(conceptList);

function joinList(conceptList) {
var output = "";
    for (var i = 0; i < conceptList.length; i++) {
        if (i === 0) {          // Just run once to accomodate the need for commas to start after the first word
            output += conceptList[i];
        } else {
            output += ", " + conceptList[i];
        }
    }
    return output;
}
 console.log("Today I learned about " + joinList(conceptList) + ".");
// // Write your code here...

// var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

//  // a custom function written by you (you must define it too!)
// var concepts = function joinList(conceptList) {
//     for (var i = 0; i < conceptList.length; i++) {
//     }
//     return conceptList[i].concat();
// }
// console.log(concepts(conceptList));

// Write your code here...

//console.log("Today I learned about " + concepts + ".");
