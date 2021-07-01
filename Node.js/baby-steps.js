const numbers = process.argv.slice(2);
const sum = numbers.reduce((acc, cur) => Number(acc) + Number(cur));

console.log(sum);
