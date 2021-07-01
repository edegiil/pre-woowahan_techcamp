const fs = require('fs');

const file_path = process.argv[2];

fs.readFile(file_path, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  
  const splited = data.toString().split('\n');
  
  const lines = splited.length - 1;  
  console.log(lines);
});  


