const Car = require('../modules/Car');

exports.addCar = async function (CarObj) {
    const result = await Car.create(CarObj)
    return result.toJSON()
}

exports.deleteCar = async function (CarId) {
    return await Car.destroy({
        where: {
            id: CarId
        }
    })
}

exports.updateCar = async function (CarId, CarObj) {
    return await Car.update(CarObj, {
        where: {
            id: CarId
        }
    })
}

exports.getCarById = async function (CarId) {
    const result = await Car.findByPk(CarId);
    if (result) {
        return result.toJSON()
    }
    return null
}

exports.getCars = async function (page = 1, limit = 10, name) {
    let where = {}
    if (name) {
        where.name = name
    }
    const result = await Car.findAndCountAll({
        offset: (page - 1) * limit,
        limit: +limit,
    })
    return JSON.parse(JSON.stringify(result))
}