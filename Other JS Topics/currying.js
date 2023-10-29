// Basic Example of curring
function currying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(currying(4)(5)(6)); // 15

// Advance example of Curring
function add(a, b) {
  console.log("Before Return keyword", a, b);
  return function (c, d) {
    if (c && d) {
      return add(a + b + c + d, 0);
    } else {
      return a + b;
    }
  };
}
console.log(add(1, 2)(3, 4)(5, 6)(1, 1)()); // 23
