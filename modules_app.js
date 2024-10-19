const my_module = require('./my_modules');
const sum = my_module.arithmetic.add(10, 5);
console.log(`加算結果: ${sum}`);

const difference = my_module.arithmetic.subtract(10, 5);
console.log(`減算結果: ${difference}`);

const concat = my_module.string_concat.concat('Hello', 'Node.js');
console.log(`結合結果: ${concat}`);
