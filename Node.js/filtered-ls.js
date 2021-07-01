const fs = require('fs');

const directory = process.argv[2];
const filename_extension = process.argv[3];

fs.readdir(directory, (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  
  const filtered = files.filter((filename) => filename.split('.')[1] === filename_extension);
  filtered.forEach((file) => console.log(file));
});
