function isEvenOrOdd(num) {
  if (typeof num !== 'number'){
    throw new TypeError('/expects a number/');
  } else {
    var bob = (num % 2 === 0) ? 'even' : 'odd';
    return bob;
  }
}

module.exports = isEvenOrOdd;
