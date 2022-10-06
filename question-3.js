const fsExtra = require('fs-extra');

function clearFolder(){
    dir = '/Logs'
    var files = fs.readdirSync(dir);
    console.log(files)
    fsExtra.emptyDirSync(Logs);
    console.log("All files were removed!")
    fs.rmSync(dir, { recursive: true, force: true });
    console.log("delete files" + dir)
}
function createFolder(){
    fs.mkdirSync(dirpath, { recursive: true })

    console.log('Starting directory: ' + process.cwd());
    try {
        process.chdir('/Logs');
        console.log('New directory: ' + process.cwd());
    } catch (err) {
        console.log("Couldn't change directory: " + err);
    }
}

function createFiles(){
    for(let i; i < 9; i++){
        let fileName = "log" + i + ".txt"
        let data = "Hello world v." + i
        fs.writeFile(fileName, data, (err) => {
            if (err)
              console.log("Couldn't write files: " + err);
            else {
              
              console.log(fs.readFileSync(fileName, "utf8"));
            }
          });
        
    }
    
}