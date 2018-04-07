
// Loop through list. Check whether list[i] > list[i + 1]. If so swap. Either way, move on to next element.
// Then loop through list again. Go until no changes need to be made.

// for our p5 drawing:
var range = 160;
var maxVal = 300;
var newList = [];

// This doesn't make much sense: the list should be chosen in the index or draw.js.:
for (var i=0; i < range; i++) {
  newList.push(Math.floor(Math.random() * maxVal));
}


var changes = 0;
var result = [];

var test = [1, 15, 53, 32, 2, 4,35, 54, 2342, 12 ,1, 23, 3, 2, 32, 3223];

function bubbleSort(arr) {
  // console.log(arr);
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

  // console.log(changes);

  if (changes == 0) {
    // not sure why it still goes for a while after this is done. Because of other calls to bubbleSort in the queue?
    // console.log('zero!!!!!!1');
    return arr;
  } else {

    // recurse:
    // setInterval(bubbleSort(arr), 1000);
    // setTimeout(bubbleSort(arr), 100);
    // Oh prob because we can't pass in a parameter.
    // bubbleOurs();
    setTimeout(bubbleOurs, 100);
  }

  result = arr;
  // console.log(arr);
  return result;
}

var result = bubbleSort(test);


// this is false!:
// console.log([1, 2] == [1, 2]);

function bubbleOurs() {
  bubbleSort(newList);
}



var start = Date.now();
var res = bubbleSort(newList);
var end = Date.now();
console.log(res, end - start);
// console.log(result);





// chillin
