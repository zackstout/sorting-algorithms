
var randomList = [];

for (var i=0; i < 10000; i++) {
  randomList.push(Math.floor(Math.random() * 2000));
}

// console.log(randomList);

module.exports = {
  list: randomList
};
