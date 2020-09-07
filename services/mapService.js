const Map = require('../modules/Map');

exports.addMap = async function (mapObj) {
    console.log(mapObj)
    const result = await Map.create(mapObj)
    return result.toJSON()
}

exports.deleteMap = async function (mapId) {
    return await Map.destroy({
        where: {
            id: mapId
        }
    })
}

exports.updateMap = async function (mapId, mapObj) {
    return await Map.update(mapObj, {
        where: {
            id: mapId
        }
    })
}

exports.getMapById = async function (mapId) {
    const result = await Map.findByPk(mapId);
    if (result) {
        return result.toJSON()
    }
    return null
}

exports.getMaps = async function (page = 1, limit = 10, placeId, name) {
    let where = {}
    if (placeId) {
        where.placeId = placeId
    }
    if (name) {
        where.name = name
    }
    console.log(where)
    const result = await Map.findAndCountAll({
        offset: (page - 1) * limit,
        limit: +limit,
        where
    })
    return JSON.parse(JSON.stringify(result))
}