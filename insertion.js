
// Walk through the list one by one. If the item is greater than its predecessor, switch until it's *not* greater than predecsssor.

var list = [1, 4, 2, 1, 4, 5, 3, 2, 1, 4, 5, 6];

function insertionSort(arr) {
  arr.forEach(function(x, i) {
    if (x > arr[i + 1]) {
      // swap (recursively)
    } else {
      // move on
    }
  });
}

insertionSort(list);
