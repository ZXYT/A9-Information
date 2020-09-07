const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Chapter = sequelize.define(
    'Chapter',
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

module.exports = Chapter;