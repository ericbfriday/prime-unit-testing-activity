function isEvenOrOdd(num) {
  if (typeof num !== 'number'){
    throw new TypeError('/expects a number/');
  } else {
    var bob = (num % 2 === 0) ? 'even' : 'odd'; //if (condition) is true - return first thing which is 'even'
    return bob;
  }
}

module.exports = isEvenOrOdd;
