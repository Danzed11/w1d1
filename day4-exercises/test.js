
//FILTERED


// var filtered = [12, 5, 7, 1, 9, 3, 1]; 

// const result = filtered.filter(function(filteredWords) { 
//   return filteredWords < 10})
//   console.log(result);

//MAP FUNCTION


// var array = [1, 6, 3, 2, 8, 10, 45, 4];
// var polo = [];
// var result = array.map(function(num) {
//   if ( num % 2 == 0){
//   return "Even";
//   } else if (num % 2 ==1){
//     return "Odd";
//   }
// })
// console.log(result);

//OBJECT VALUES


// var array = [{a: 6,
//               b: 1,
//               c: 22},
            
//               {d:24,
//                e:26,
//                f:66}] 
// console.log(Object.values(array[0]));


// var input = [
//   { x: 3, y: 4 },
//   { x: 12, y: 5 },
//   { x: 8, y: 15 }
// ];
// var result = input.map(function(n) {
//   return Math.sqrt((n.x * n.x) + (n.y * n.y));
// });


// console.log(result[0] === 5);
// console.log(result[1] === 13);
// console.log(result[2] === 17);
// console.log(result);

var array = [5, 12, 1, 33, 10];
var sorted = array.sort(function(a,b) {
return 0.5 - Math.random();
});
console.log(sorted);