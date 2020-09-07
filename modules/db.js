const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('a9infodb', 'root', 'ETmGwzdXzqJG6A9G', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: msg => {
    //     sqlLogger.debug(msg)
    // }
})

module.exports = sequelize;