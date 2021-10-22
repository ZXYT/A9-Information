import sequelize from "./db";
import { DataTypes, Model, Optional } from "sequelize";

export interface IAdmin {
  id: number;
  loginId: string;
  loginPwd: string;
}

export interface IAdminCreation extends Optional<IAdmin, "id"> {}

class Admin extends Model<IAdmin, IAdminCreation> implements IAdmin {
  id: number;
  loginId: string;
  loginPwd: string;
}

Admin.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    loginId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    loginPwd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: false,
    updatedAt: false,
    paranoid: true,
    tableName: "admin",
    sequelize,
  }
);

export default Admin;
