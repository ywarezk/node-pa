

let instance;

module.exports = class EmailUtils {

    static getInstance() {
        if (!instance) {
            instance = new this();
        }
        return instance;
    }

    /**
     * check if email is valid
     * @param {String} email 
     * @returns {boolean}
     */
    isMailValid(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

}

// function EmailUtils() {

// }

// EmailUtils.prototype.isMailValid