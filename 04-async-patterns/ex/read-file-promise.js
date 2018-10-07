const fs = require('fs');

module.exports = function(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, function(err, result) {
            if (err) {
                reject(err);
            }
            resolve(result.toString());
        })
    })
}