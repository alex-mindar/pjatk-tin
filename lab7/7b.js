// run the script with 'node 7a.js ./'
const fs = require('fs');

const directoryPath = process.argv[2]

fs.watch(directoryPath, (eventType, filename) => {
    console.log(eventType);
    console.log(filename);
})