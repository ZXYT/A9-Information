import sequelize from "./db";
import { DataTypes, Model, Optional } from "sequelize";

export interface IMap {
  id: number;
  name: string;
  duration: number;
  imgUrl: string;
}

export interface IMapCreation extends Optional<IMap, "id"> {}
export interface IMapInstance extends Model<IMap, IMapCreation>, IMap {}

const Map = sequelize.define<IMapInstance>(
  "Map",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imgUrl: {
      type: DataTypes.STRING,
      // allowNull: false
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  }
);

export default Map;
