
// 10 buckets, one for each digit. Standardize length of all numbers with leading zeroes. If length is n, we need n passes to sort.
// first pass: look at one's digit, put each number in bucket corresponding to its digit in the one's place.
// populates array for next pass by adding from bottom of each bucket, left to right.
// remove leading zeros before completion.

var list = [12, 32, 540, 432, 43, 1, 20, 17, 303, 40, 32];


function radixSort(arr) {

  // find max number in array:
  var max = 0;
  for (var i=0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  var maxLen = String(max).length;

  // thanks map!
  var cleanArr = arr.map(function(el) {
    var cleanEl = String(el);
    while (cleanEl.length < maxLen) {
      cleanEl = "0" + cleanEl;
    }
    return cleanEl;
  });

  // console.log(cleanArr);

  var first = passOver(cleanArr, 1);
  // console.log(first);

  // Poor man's recursion, not sure why I couldn't figure out how to write it recursively:
  var currentSort;
  var nextSort;

  for (var j=1; j <= maxLen; j++) {
    if (j == 1) {
      currentSort = passOver(cleanArr, 1);
      nextSort = passOver(cleanArr, 1);
    } else {
      nextSort = passOver(currentSort, j);
      currentSort = nextSort;
    }
  }

  return nextSort;

  // console.log(nextSort);
  // var second = passOver(first, 2);
  // console.log(second);

  // var x = passOver(cleanArr, 3);
  // console.log(x);
  // console.log(recursePass(cleanArr, 3));
}

//
// function recursePass(arr, level) {
//   if (level == 1) {
//     return passOver(arr, 1);
//   } else {
//     // ????
//
//   }
// }

// e.g. start at 1 for last digit, go to 3 for first digit:
function passOver(arr, level) {

  // console.log("LEVEL", level);
  var buckets = [[], [], [], [], [], [], [], [], [], []];
  var res = [];

  arr.forEach(function(el) {
    var char = el.charAt(el.length - level);
    var ind = parseInt(char);
    // console.log(ind);
    // console.log(buckets[3]);
    buckets[ind].push(el);
  });

  // console.log(buckets);

  buckets.forEach(function(b) {
    while (b.length > 0) {
      var num = b.shift();
      res.push(num);
    }
  });

  // console.log(res);

  return res;

    // if (level == 1) {
    //   return res;
    //
    // } else {
    //   return passOver(res, level - 1);
    // }
}

// all done, except for removing leading zeros:

var start = Date.now();
var res = radixSort(randomList);
var end = Date.now();
console.log(res);
console.log(start - end);









// chillin
