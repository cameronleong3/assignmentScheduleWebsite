const path = require("path");
const fs = require("fs/promises");
const mimeTypes = {
    html: "text/html",
    css: "text/css",
    js: "text/javascript",
    png: "image/png"
  };

const servePublic = function (req, res) {
    console.log("beginning of servePublic")
    const filePath = path.join(__dirname, "..", ...req.url.split("/"));
   //return the promise
    return fs.readFile(filePath)
    .then(function(fileContents){
        res.statusCode = 200;
        console.log("reading...")
        console.log("extension:",path.extname(filePath).substring(1))
        const header = mimeTypes[path.extname(filePath).substring(1)]
        console.log("header:",header)
        res.writeHead(200,{'Content-Type': header})
        //console.log("Headers:",res.getHeaders())
        res.write(fileContents)
        res.end()
        return
    })
    .catch(function(err){
    if (err.code === "ENOENT") {
        //console.log(`${path} could not be found, returning 404`)
        res.writeHead(404)
    } 
    else {
        //console.log('An error occurred', err)
        res.writeHead(500)
        //res.end()
    }
    res.end()
    })
};

module.exports = servePublic;
