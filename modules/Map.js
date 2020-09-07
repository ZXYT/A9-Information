const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Map = sequelize.define(
    'Map',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imgUrl: {
            type: DataTypes.STRING,
            // allowNull: false
        },
    },
    {
        createdAt: false,
        updatedAt: false,
        paranoid: true
    }
);

module.exports = Map;