function countLetters(phrase) {
    var object = {};

var str = phrase.replace(/\s/g, "");
   for (var i = 0; i < str.length; i++) {
           var character = str[i];
        //    console.log(character);
           if (object[character]) { //
               object[character] ++;
           } else {
               object[character] = 1;
           }

   }
   return object;

}

console.log(countLetters("lighthouse in the house"));

