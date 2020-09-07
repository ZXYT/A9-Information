const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Season = sequelize.define(
    'Season',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        paranoid: true
    }
);

module.exports = Season;