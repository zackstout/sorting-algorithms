
// Just copying this from the site ..... Not too sure what's going on:
// function max_heapify(arr, size, i) {
//   // why are we adding 1?
//   var left = 2 * i + 1;
//   var right = 2 * i + 2;
//   largest = i;

//   if (left < size && arr[left] > arr[largest]) {
//     largest = left;
//   }
//   if (right < size && arr[right] > arr[largest]) {
//     largest = right;
//   }
//   if (largest != i) {
//     // a nice trick for this in python: A, B = B, A
//     var lar = arr[largest];
//     arr[largest] = arr[i];
//     arr[i] = lar;

//     max_heapify(arr, size, largest);
//   }
// }





// Let's really build maxHeap:
function maxHeap(arr) {
  // console.log(arr);


  // Ex: arr = [1, 5, 3, 2, 1, 3, 3, 2, 1, 3].
  // 1 element fills first level (index 0)
  // 2 elements fill second level (indices 1, 2)
  // 4 elements fill third level (indices 3, 4, 5, 6) ...
  // So this array of length 10 has 3 full levels and a 4th level with 3 elements.
  var res = [];







}


// var res = max_heapify([1,2,3,2,2,1,4,2,1], 9, 3);
// console.log(res);

maxHeap([1, 3, 2, 1, 3, 2, 3, 3, 4, 2,1 , 3]);