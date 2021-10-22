import sequelize from "./db";
import { DataTypes, Model, Optional } from "sequelize";

export interface ISeason {
  id: number;
  name: string;
  position: string;
}
export interface ISeasonCreation extends Optional<ISeason, "id"> {}

export interface ISeasonInstance
  extends Model<ISeason, ISeasonCreation>,
    ISeason {}

const Season = sequelize.define<ISeasonInstance>(
  "Season",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
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

export default Season;
