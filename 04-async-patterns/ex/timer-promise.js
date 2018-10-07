


module.exports = function(mili) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, mili)
    });
}