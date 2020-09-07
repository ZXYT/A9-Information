const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Car = sequelize.define(
    'Car',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        topSpeed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        acceleration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        handling: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        nitro: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        star: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        rank: {
            type: DataTypes.STRING,
            allowNull: false
        },
        point: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        gas: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imgUrl: {
            type: DataTypes.STRING,
            // allowNull: false
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        paranoid: true
    }
);

module.exports = Car;