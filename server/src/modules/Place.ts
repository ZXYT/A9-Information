import sequelize from "./db";
import { DataTypes, Model, Optional } from "sequelize";

export interface IPlace {
  id: number;
  name: string;
}
export interface IPlaceCreation extends Optional<IPlace, "id"> {}

export interface IPlaceInstance extends Model<IPlace, IPlaceCreation>, IPlace {}

const Place = sequelize.define<IPlaceInstance>(
  "Place",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  }
);

export default Place;
