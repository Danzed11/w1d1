
function findWaldo(arr, found) {
arr.forEach(function(waldo, index) { //forEach
  if (waldo === "Waldo") {
      found(index);   // execute callback
  }
  });
}

function actionWhenFound(index) {
 
  console.log("Found him at index " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

