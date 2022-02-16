// exports.add = function (x, y) {
// 	return x + y;
// };

// exports.sub = function (x, y) {
// 	return x - y;
// };

// exports.mult = function (x, y) {
// 	return x * y;
// };

// exports.div = function (x, y) {
// 	return x / y;
// };

const add = function (x, y) {
  return x + y;
};

const sub = function (x, y) {
  return x - y;
};

const mult = function (x, y) {
  return x * y;
};
const div = function (x, y) {
  return x / y;
};


// module.exports.op = {
// 	plus: add,
// 	minus: sub,
// 	product: mult,
// 	divide: div,
//   };
  module.exports = {
	plus: add,
	minus: sub,
	product: mult,
	divide: div,
  };
	