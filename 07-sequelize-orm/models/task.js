

module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('task', {
        title: {
            type: DataTypes.STRING,
            validate: {
                isAlphanumeric: true,
                len: [0, 20]
            }
        },
        when: {
            type: DataTypes.DATE,
            validate: {
                isDate: true
            }
        }
    });
    const User = sequelize.import('./user');
    // Task.belongsTo(User);
    Task.sync();
    return Task;
}