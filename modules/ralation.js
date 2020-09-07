// const Car = require('./Car');
const Map = require('./Map');
const Place = require('./Place');
const Season = require('./Season');
const Chapter = require('./Chapter');
// const Event = require('./Event');

Place.hasMany(Map);
Map.belongsTo(Place)
Chapter.hasMany(Season);
// Season.hasMany(Map);
// Event.hasMany(Car);
