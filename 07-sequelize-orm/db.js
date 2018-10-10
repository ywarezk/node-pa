const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://localhost:5432/todo');
// const sequelize = new Sequelize(process.env.DATABASE_URL);

sequelize.authenticate()
    .then(() => console.log('we are now connected'))
    .catch(() => console.log('failed to connect'));

// import the user
sequelize.import('./models/user');
sequelize.import('./models/task');

module.exports = sequelize;