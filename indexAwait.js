const fs = require('fs-extra');

const file = 'pubs.json';
const dir = './temp/';

// on vérifie d'abord la présence du repertoire temp avant d'appeler d'autre promise
async function init(dir) {
    try {
        const Pathexist = await fs.pathExists(dir);
        console.log("=== exist "+ Pathexist);
        if(Pathexist)
        {
            const remove = await fs.remove(dir);
            console.log("=== remove ");
        }

        const create = await fs.ensureDir(dir) && fs.copy('pubs.json', dir + 'pubs.json');
        console.log("=== create ");
     //   const watcher = await runWatcher();
      //  console.log("=== watcher "+ watcher);

    } catch (err) {
        console.error(err)
    }


}

init(dir);


