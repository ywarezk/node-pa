
const https = require('https');


const req = https.get('https://nztodo.herokuapp.com/api/task/asdfasfas?format=json', function(res) {
    let json = '';
    const myArr = [];
    res.on('data', function(d) {
        json+=d.toString();
        // this.emit('oneHundred', myArr);
        // myArr = [];
    });

    res.on('end', function() {
        console.log(json);
    });

    res.on('error', function(error) {
        console.log('some error in response');
    });
});

req.on('error', function(err) {
    
})

