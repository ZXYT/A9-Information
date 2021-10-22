import sequelize from "./db";
import { DataTypes, Model, Optional } from "sequelize";

export interface IChapter {
  id: number;
  name: string;
}

export interface IChapterCreation extends Optional<IChapter, "id"> {}

export interface IChapterInstance
  extends Model<IChapter, IChapterCreation>,
    IChapter {}

const Chapter = sequelize.define<IChapterInstance>(
  "Chapter",
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

export default Chapter;
