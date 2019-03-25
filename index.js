const fs = require('fs-extra');

const file = 'pubs.json';
const dir = './temp/';

// on vérifie d'abord la présence du repertoire temp avant d'appeler d'autre promise
fs.pathExists(dir)
    .then(exist => {
        if (exist) {
            console.log("=== remove ");
            return fs.remove(dir)
        }
        return;
    })
    .then(() => {
        console.log("=== create dir & file ");
        return fs.ensureDir(dir) && fs.copy('pubs.json', dir + 'pubs.json')
    })


    .then(() => {
        console.log("== lecture json");

        return fs.readJson('pubs.json').then((pubs) => {
            console.log(pubs.name)
        })

    })
    .then(() => {
        console.log("=== watcher ");
        return fs.watchFile('pubs.json', (curr, prev) => {

            console.log(`the current mtime is: ${curr.mtime}`);
            console.log(`the previous mtime was: ${prev.mtime}`);
        })
    })
    .catch(err => {
        console.error(err)
    })




