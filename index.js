const fs = require('fs-extra');

const file = 'pubs.json';
const dir = './temp/';


fs.ensureDir(dir)
    .then(() => {
        console.log('=== Création Temp ===')
    })
    .catch(err => {
        console.error(err)
    })


fs.remove(dir)
    .then(() => {
        console.log('=== Supression Temp ===')
    })
    .catch(err => {
        console.error(err)
    })


fs.pathExists(file)
    .then(exists => console.log(exists)) 


/*
fs.readFile('pubs.json', 'utf-8', function (e, data) {
    if (e) {
        console.log("log = " + e);
    }
    console.log("file = " + data);

});

fs.watchFile('pubs.json', (curr, prev) => {

    console.log(`the current mtime is: ${curr.mtime}`);
    console.log(`the previous mtime was: ${prev.mtime}`);
});

*/