
console.log('quick!');

var array = [1, 2, 4, 2, 1, 4, 5, 6, 2, 32, 12, 12, 1 , 32, 24];

function quickSort(arr) {
  console.log(arr);
  // Base case:
  if (arr.length == 0) {
    // console.log('hi there');
    return arr;
  } else {
    // innocent until proven guilty:
    var allSame = true;

    for (var i=0; i < arr.length - 1; i++) {
      if (arr[i] != arr[i+1]) {
        allSame = false;
      }
    }

    // console.log(allSame);
    if (allSame) {
      return arr;
    }

    var less = [];
    var greater = [];
    var ran = Math.floor(Math.random() * arr.length);
    var x = arr[ran];

    // Interesting, i think we're going to have to go through and check if each element is the same as each other. i.e. [1, 1, 1] which keeps breaking the algorithm. If so, we want to return it and move on, rather than trying to break *it* up, which only gives the same thing.
    // Loop through the array:
    arr.forEach(function(c) {
      if (c <= x) {
        less.push(c);
      } else {
        greater.push(c);
      }
    });
    // console.log(less, greater);


    // I think i read "sort them both using quickSort" too literally: this is just winnowing down to smallest list of all the same and then stalling out. We need to give it some logic.
    var g = quickSort(greater);


    var l = quickSort(less);



    // console.log(less, greater);

    console.log('hi');

    return(l.concat(g));
  }
}

var res = quickSort(array);
console.log(res);
