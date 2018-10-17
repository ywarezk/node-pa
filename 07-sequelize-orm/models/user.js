

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                isGmail: (value) => {
                    if (value.indexOf('gmail') === -1) {
                        throw new Error('some error');
                    }
                }
            },
            allowNull: false
        }
    });
    User.sync();
    return User;
}