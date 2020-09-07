const express = require('express');

const app = express();

const path = require('path');
const StaticRoot = path.resolve(__dirname, '../public')
app.use(express.static(StaticRoot))

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./tokenMidWare'))

app.use('/api/admin', require('./api/admin'))
app.use('/api/map', require('./api/map'))
app.use('/api/place', require('./api/place'))
app.use('/api/event', require('./api/event'))
app.use('/api/car', require('./api/car'))
app.use('/api/upload', require('./api/upload'))



app.use(require('./errMIdware'))

const port = 80;
app.listen(port, () => console.log('server start'))