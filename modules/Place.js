const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Place = sequelize.define(
    'Place',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        createdAt: false,
        updatedAt: false,
        paranoid: true
    }
);

module.exports = Place;