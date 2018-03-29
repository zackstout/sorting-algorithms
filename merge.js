
var list = [1,2,1,4,5,2,1,5,5,0,4,8];

// takes two sorted lists and returns a sorted merge of them:
function merge(arr1, arr2) {
  var result = [];
  // console.log(arr1, arr2);
  while (arr1.length > 0 && arr2.length > 0) {
    var smaller = arr1[0] < arr2[0] ? 1 : 2;
    if (smaller == 1) {
      result.push(arr1[0]);
      arr1.splice(0, 1);
    } else {
      result.push(arr2[0]);
      arr2.splice(0, 1);
    }
  }

  if (arr1.length > 0) {
    result = result.concat(arr1);
  } else {
    result = result.concat(arr2);
  }

  return result;
  // console.log(result);
}

// merge([1, 3, 32, 2], [2, 4, 5, 5]);

function mergeSort(arr) {
  if (arr.length == 1) {
    return arr;
  } else {
    var len = Math.floor(arr.length / 2);

    var list1 = arr.slice(0, len);
    var list2 = arr.slice(len);

    // console.log(list1, list2);

    return(merge(mergeSort(list1), mergeSort(list2)));
  }
}


// var res = mergeSort(list);
// console.log(res);

var start = Date.now();
var res = mergeSort(randomList);
var end = Date.now();
console.log(res, end - start);
