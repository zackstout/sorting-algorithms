
function setup() {
  createCanvas(800, 400);
  background(229);
  // Great, this can access variable from counting.js:
  // console.log(x);
  var wid = width / range;
  console.log(wid);
  var base = height - 10;
  console.log(newList);

  for (var i=0; i < range; i++) {
    line(i*wid, base, i*wid, base - newList[i]);
  }
}

function draw() {

}
