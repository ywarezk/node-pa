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

// to run through docker

// docker run --name postgresql4 --restart always --env 'PG_TRUST_LOCALNET=true' -p 5432:5432 sameersbn/postgresql:10
// createdb -h 0.0.0.0 -U postgres todo
// psql -h 0.0.0.0 -U postgres todo

// DATABASE_URL=postgres://:postgres@localhost:5432/todo