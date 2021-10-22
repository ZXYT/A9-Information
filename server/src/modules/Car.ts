import sequelize from "./db";
import { DataTypes, Model, Optional } from "sequelize";

export interface ICar {
  id: number;
  name: string;
  topSpeed: number;
  acceleration: number;
  handling: number;
  nitro: number;
  star: number;
  rank: number;
  point: number;
  gas: number;
  imgUrl: string;
}

export interface IcarCreation extends Optional<ICar, "id"> {}

export interface ICarInstance extends Model<ICar, IcarCreation>, ICar {}

const Car = sequelize.define<ICarInstance>(
  "Car",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    topSpeed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    acceleration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    handling: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nitro: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    star: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rank: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    point: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gas: {
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

export default Car;
