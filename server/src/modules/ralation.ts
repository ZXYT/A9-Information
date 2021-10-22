// import Car from './Car';
import Map from "./Map";
import Place from "./Place";
import Season from "./Season";
import Chapter from "./Chapter";
// import Event from "./Event";

Place.hasMany(Map);
Map.belongsTo(Place);
Chapter.hasMany(Season);
// Season.hasMany(Map);
// Event.hasMany(Car);
