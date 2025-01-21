
// nodejs events

import fs from 'fs';

var readStream = fs.createReadStream('hello.txt');

/*Write to the console when the file is opened:*/
readStream.on('open', function () {
  console.log('The file is open');
  console.log("Open");
});

              