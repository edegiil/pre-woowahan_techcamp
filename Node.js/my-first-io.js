const fs = require('fs');

const file_path = process.argv[2];

const file = fs.readFileSync(file_path);
const splited = file.toString().split('\n');

const lines = splited.length - 1;

console.log(lines);
