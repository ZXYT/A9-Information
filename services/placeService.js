const Place = require('../modules/Place');

exports.addPlace = async function (PlaceObj) {
    const result = await Place.create(PlaceObj)
    return result.toJSON()
}

exports.deletePlace = async function (PlaceId) {
    return await Place.destroy({
        where: {
            id: PlaceId
        }
    })
}

exports.updatePlace = async function (PlaceId, PlaceObj) {
    return await Place.update(PlaceObj, {
        where: {
            id: PlaceId
        }
    })
}

exports.getPlaceById = async function (PlaceId) {
    const result = await Place.findByPk(PlaceId);
    if (result) {
        return result.toJSON()
    }
    return null
}

exports.getPlaces = async function () {
    const result = await Place.findAll()
    return JSON.parse(JSON.stringify(result))
}