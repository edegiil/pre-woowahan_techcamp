const fs = require('fs');

function mymodule(directory_name, filename_extension, callback) {
  fs.readdir(directory_name, (err, data) => {
    if (err) {
      return callback(err);
    }

    const filtered = data.filter((filename) => filename.split('.')[1] === filename_extension);
    callback(null, filtered);
  });
}

module.exports = mymodule;
