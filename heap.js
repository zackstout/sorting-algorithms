
// Just copying this from the site ..... Not too sure what's going on:
function max_heapify(arr, size, i) {
  // why are we adding 1?
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  largest = i;

  if (left < size && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < size && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest != i) {
    // a nice trick for this in python: A, B = B, A
    var lar = arr[largest];
    arr[largest] = arr[i];
    arr[i] = lar;

    max_heapify(arr, size, largest);
  }
}


var res = max_heapify([1,2,3,2,2,1,4,2,1], 9, 3);
console.log(res);
