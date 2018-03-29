
// Walk through the list one by one. If the item is *smaller* than its *predecessor*, switch until it's *not* greater than predecsssor.

var list = [1, 4, 2, 1, 4, 5, 3, 2, 1, 4, 5, 6];

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

// function swapWithPred()

var result = insertionSort(list);
console.log(result);

function swapWithPred(i) {
  // first example of larger is 4, since 4 > 2:
  var larger = list[i];
  list[i] = list[i+1];
  list[i+1] = larger;

  if (list[i-1] > list[i]) {
    swapWithPred(i - 1);
  }
}
