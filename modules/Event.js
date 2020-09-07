const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Event = sequelize.define(
    'Event',
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        endTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        eventClass: {
            type: DataTypes.INTEGER,
        }
    },
    {
        createdAt: false,
        updatedAt: false,
        paranoid: true
    }
);

module.exports = Event;