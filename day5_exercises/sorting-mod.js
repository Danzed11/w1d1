var points = [40, 100, 1, 5, 25, 10];

module.exports = {

nothingSpecial: function (greeting) {
  return greeting;
},  

myFunction: function (points) {
points.sort(function(a, b){return a - b});
return points;
  }
}


// function nothingSpecial (greeting) {
//   return greeting;
// }
// console.log(nothingSpecial("I can also be imported"));
  //console.log(myFunction([40, 100, 1, 5, 25, 10]));

