
// create a count array of amount of time each value appears in the list
// won't work with negative numbers unless we add listener for minimum. just assume min of 0 for now.

// console.log(randomList);
var list = [1,2,1,4,5,2,1,5,5,0,4,8];
// will yield C = [1, 3, 2, 0, 2, 3, 0, 0, 1];
// Then C' = [1, 4, 6, 6, 8, 11, 11, 11, 12];

function countSort(arr) {
  // will be our sorted result:
  var b = new Array(arr.length);
  // b[2] = 1;
  // console.log(b);

  // find max number in array:
  var max = 0;
  for (var i=0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  // initialize counting array with 0s:
  var c = new Array(max + 1);
  for (var j=0; j < max + 1; j++) {
    c[j] = 0;
  }

  // create counting array:
  arr.forEach(function(el) {
    c[el] ++;
  });
  // console.log(c);

  // modify counting array:
  for (var k=1; k < c.length; k++) {
    c[k] = c[k] + c[k-1];
  }

  // console.log(c);

  // finally, set values of result array:
  // wait, why do they bother decrementing numbers in c'? Oooh because that tells it what index.
  for (var m = arr.length - 1; m >= 0; m--) {
    // console.log(arr[m]);
    var val = c[arr[m]];
    // console.log(val);
    b[val] = arr[m];
    c[arr[m]] --;
  }

  // hmm, not sure where that first 'empty' is coming from:
  return b.slice(1);
}

var start = Date.now();
var res = countSort(randomList);
var end = Date.now();
console.log(res, end - start);
