import sequelize from "./db";
import { DataTypes, Model, Optional } from "sequelize";

export interface IEvent {
  id: number;
  name: string;
  endTime: Date;
  eventClass: number;
}

export interface IEventCreation extends Optional<IEvent, "id"> {}

export interface IEventInstance extends Model<IEvent, IEventCreation>, IEvent {}

const Event = sequelize.define<IEventInstance>(
  "Event",
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    eventClass: {
      type: DataTypes.INTEGER,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    paranoid: true,
  }
);

export default Event;
