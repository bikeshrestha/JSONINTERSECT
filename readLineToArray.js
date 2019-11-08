var fs = require('fs');
var readline = require('readline');

var path = require('path'); 



module.exports = (filename) => {
    return new Promise((resolve, reject)=>{

        let a = []
        readline.createInterface({
            input: fs.createReadStream(filename),
            terminal: false
        }).on('line', function(line) {
           a.push(JSON.parse(line))
        }).on('close', function(){
            resolve(a)
        });
    })
}