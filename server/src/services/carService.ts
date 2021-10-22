import { Identifier } from "sequelize/types";
import Car, { ICar, IcarCreation } from "../modules/Car";

export default class CarService {
  static async addCar(CarObj: IcarCreation) {
    const result = await Car.create(CarObj);
    return result.toJSON();
  }

  static async deleteCar(CarId: string) {
    return await Car.destroy({
      where: {
        id: CarId,
      },
    });
  }

  static async updateCar(CarId: string, CarObj: Partial<ICar>) {
    return await Car.update(CarObj, {
      where: {
        id: CarId,
      },
    });
  }

  static async getCarById(CarId: Identifier) {
    const result = await Car.findByPk(CarId);
    if (result) {
      return result.toJSON();
    }
    return null;
  }

  static async getCars(page = 1, limit = 10, name?: string) {
    let where: any = {};
    if (name) {
      where.name = name;
    }
    const result = await Car.findAndCountAll({
      offset: (page - 1) * limit,
      limit: +limit,
    });
    return JSON.parse(JSON.stringify(result));
  }
}
