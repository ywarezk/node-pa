const https = require('https');

module.exports = function(url) {
    return new Promise(function(resolve, reject) {
        const req = https.get(url, function(res) {
            const html = '';

            // is there a difference if i use lambda?
            res.on('data', function(d) {
                html+=d.toString();
            })

            res.on('end', function() {
                resolve(html);
            })
        });
        req.on('error', function(err) {
            reject(err);
        });
    });
}