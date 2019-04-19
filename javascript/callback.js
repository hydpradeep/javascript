var fs = require('fs');

var readFile = (path) => {
    return new Promise( (resolve, reject) => {
    fs.readFile(path, "utf8", (err, data)=> { 
        if(err) reject(err);
        console.log("file read sucess");
        resolve(data); 
        });
    });
}

var writeFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(__dirname+"/writeMe.txt", data, (err)=> { 
            if(err)  reject(err);
            console.log("file created...")
            resolve(__dirname+"/writeMe.txt");
        });
    })
    
}

var deleteFile = (path) => {
    return new Promise((resolve, reject) => {
        fs.unlink(path, (err) => {
            if(err) reject(err);
            resolve("File deleted successfully"); }
        );
    })
    
}

readFile(__dirname+"/read.txt")
    .then((data)=> writeFile(data))
    .then((path)=> deleteFile(path))
    .then((result)=> console.log(result));