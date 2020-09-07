require('./Admin')
require('./Car')
require('./Event')
require('./Map')
require('./Season')
const sequelize = require('./db')

sequelize.sync({ alter: true }).then(() => console.log('modules sync'))