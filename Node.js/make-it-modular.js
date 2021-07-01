const mymodule = require('./mymodule');

const directory = process.argv[2];
const filename_extension = process.argv[3];

function callback(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  
  data.forEach((file) => console.log(file));
}

mymodule(directory, filename_extension, callback);
