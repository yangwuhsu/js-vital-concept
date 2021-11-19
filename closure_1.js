function dogHouse() {
  var count = 0;
  function countDogs() {
    count += 1;
    console.log(count + " dogs");
  }
  return countDogs;
}

const countDogs = dogHouse();
console.log(countDogs());
console.log(countDogs());
console.log(countDogs());

// 簡化為：
function createCounter(name) {
  var counte = 0;
  return function () {
    counte++;
    console.log(counte + " " + name);
  };
}

var countPen = createCounter("pen");
var countBox = createCounter("box");
console.log(countPen());
console.log(countPen());
console.log(countBox());
