
// Let's really build maxHeap:
// OK not using this but keeping for educational purposes:
function maxifyHeap(arr) {
  console.log(arr);

  // Ex: arr = [1, 5, 3, 2, 1, 3, 3, 2, 1, 3].
  // 1 element fills first level (index 0)
  // 2 elements fill second level (indices 1, 2)
  // 4 elements fill third level (indices 3, 4, 5, 6) ...
  // So this array of length 10 has 3 full levels and a 4th level with 3 elements.
  
  // children of node 0 are 1,2; children of node1 are 3,4; children of node2 are 5, 6; children of 4 are 9, 10.
 

  // check each node against its 2 children:
  // going backward has same problem: without recursion, if max (min for forward loop) is at the root (a leaf for forward loop), how can it get to the top?
  for (var i=0; i < arr.length; i++) {
    // can't declare parent up here, because then child2 will check against original parent if child1 is swapped.
    var child1 = arr[2*i + 1];
    var child2 = arr[2*i + 2];
    if (child1 > arr[i]) {

      // console.log('swapping ', child1, arr[i])
      var parent = arr[i];
      // need to pass in howMany if you pass in a replacement, which makes a lot of sense:
      arr.splice(i, 1, child1);
      arr.splice(2*i + 1, 1, parent);
    }
    if (child2 > arr[i]) {
      // console.log('swapping ', child2, arr[i])
      var parent = arr[i];
      arr.splice(i, 1, child2);
      arr.splice(2*i + 2, 1, parent);
      
    }

    // console.log(i, arr);
    
  }

  console.log(arr);
  return arr;

  // var res = [];

  // var arr2 = [ 1, 2, 3 ];

  // var parent = arr2[0];
  // var child = arr2[1];
  // arr2.splice(0, 1, child);
  // arr2.splice(1, 1, parent);

  // console.log(arr2);
}




function isMax(arr) {
  res = true;

  for (var i=0; i < arr.length; i++) {
    if (arr[2*i + 1] > arr[i] || arr[2*i + 2] > arr[i]) {
      res = false;
    }
  }
  return res;
}

function recurseMax(arr) {
  // console.log(isMax(arr));
  if (isMax(arr)) {
    return arr;
  } else {
    for (var i=0; i < arr.length; i++) {
      // can't declare parent up here, because then child2 will check against original parent if child1 is swapped.
      var child1 = arr[2*i + 1];
      var child2 = arr[2*i + 2];
      if (child1 > arr[i]) {
  
        // console.log('swapping ', child1, arr[i])
        var parent = arr[i];
        // need to pass in howMany if you pass in a replacement, which makes a lot of sense:
        arr.splice(i, 1, child1);
        arr.splice(2*i + 1, 1, parent);
      }
      if (child2 > arr[i]) {
        // console.log('swapping ', child2, arr[i])
        var parent = arr[i];
        arr.splice(i, 1, child2);
        arr.splice(2*i + 2, 1, parent);
        
      }
    }
    return (recurseMax(arr));
  }
}

console.log(recurseMax([1, 3, 2, 1, 3, 2, 3, 3, 4, 2, 1, 3]));

function heapSort(arr) {
  var ourHeap = arr;
  var res = [];
  while (ourHeap.length > 1) {
    var maxHeap = recurseMax(ourHeap);
    var last = maxHeap[maxHeap.length - 1];
    var first = maxHeap[0];
    // put max element at beginning of our sorted array:
    res.unshift(first);
    // remove the last element:
    maxHeap.pop();
    // and add it to the beginning:
    maxHeap.splice(0, 1, last); // i think we could just pass in maxHeap.pop() instead of last.
    ourHeap = maxHeap;
  }
  return res;
}

var start = Date.now();
var x = heapSort(randomList);
var end = Date.now();
console.log(x, end - start);