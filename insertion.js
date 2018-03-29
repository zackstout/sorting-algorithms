
// Walk through the list one by one. If the item is *greater* than its *follower*, swap it backwards until it's *smaller* than follower.

// Better explanation. Each element asks, am I smaller than my predecessor? If so, move back until this is no longer true.
// var list = [1, 4, 2, 1, 4, 5, 3, 2, 1, 4, 5, 6, 2, 4, 20, 32, 2, 13, 43, 2, 84, 23];

// ok it *does* work, it's just we forgot the reference to the global array from swapWithPred.
var list = randomList;

function insertionSort(arr) {
  arr.forEach(function(x, i) {
    if (x > arr[i + 1]) {
      // swap (recursively)
      swapWithPred(i);
      // console.log(list);
    } else {
      // move on
    }
  });

  return arr;
}

function swapWithPred(i) {
  // first example of larger is 4, since 4 > 2:
  var larger = list[i];
  list[i] = list[i+1];
  list[i+1] = larger;

  if (list[i-1] > list[i]) {
    swapWithPred(i - 1);
  }
}

// var result = insertionSort(randomList);
// console.log(result);

var start = Date.now();
var res = insertionSort(randomList);
var end = Date.now();
console.log(res, end - start);
