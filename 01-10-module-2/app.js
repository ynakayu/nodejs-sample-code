const arithmetic = require('./arithmetic.js');
const string_concat = require('./string_concat.js');

const sum = arithmetic.add(5, 3);
console.log(`加算結果: ${sum}`);

const difference = arithmetic.subtract(10, 5);
console.log(`減算結果: ${difference}`);

const concat = string_concat.concat('Hello', 'World');
console.log(`結合結果: ${concat}`);
