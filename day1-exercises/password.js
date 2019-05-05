var string = process.argv.slice(2).join();

var obfuscate = function(string) {
    var array = string.split("");
    var output = "";
    for (var i = 0; i < array.length; i++) {
        if(array[i] === "a") {
            output += "4";
        } else if (array[i] === "e") {
            output += "3";
        } else if (array[i] === "o") {
            output += "0";
        } else if (array[i] === "l") {
            output += "1";
        } else {
            output += array[i];
        }
    }
    return output;

}
console.log(obfuscate(string));
