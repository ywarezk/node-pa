



const fs = require('fs');

// fs.readFileSync('some-file');

try { // wrong practice
    fs.readFile('README.md', function(err, result) {
        if (err) {
            throw err;
        } else {
            console.log(result.toString());
        }
        
    });
}
catch(err) {
    console.log(err.message);
}
