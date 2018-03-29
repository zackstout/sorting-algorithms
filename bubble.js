
// Loop through list. Check whether list[i] > list[i + 1]. If so swap. Either way, move on to next element.
// Then loop through list again. Go until no changes need to be made.

var changes = 0;
var result = [];

var test = [1, 15, 53, 32, 2, 4,35, 54, 2342, 12 ,1, 23, 3, 2, 32, 3223];

function bubbleSort(arr) {
  console.log(arr);
  changes = 0;


  for (var i=0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      // swap elements:
      changes++;
      var a = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = a;
    }
  }

  console.log(changes);

  if (changes == 0) {
    console.log('zero!!!!!!1');
    return arr;
  } else {
    bubbleSort(arr);
  }

  result = arr;
  console.log(arr);
}

bubbleSort(test);


// this is false!:
// console.log([1, 2] == [1, 2]);






console.log(result);





// chillin
