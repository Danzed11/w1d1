/* let vowels = function numberOfVowels(data) {
    let counting = "aeiouAEIOU";
    let tally = 0;
    for (var i = 0; i < data.length; i++) {
        if (counting.indexOf(data[i]) !== -1) {
            tally += 1;
        }
    }
    return tally;
}


console.log(numberOfVowels("Hello there muppet")); */

function numberOfVowels(data) {
  var counting = 'aeiouAEIOU';
  var tally = 0;
  
  for(var i = 0; i < data.length ; i++) {
    if (counting.indexOf(data[i]) !== -1) {
      tally += 1;
    }
  }
  return tally;
}
console.log(numberOfVowels("orange is the new black"));