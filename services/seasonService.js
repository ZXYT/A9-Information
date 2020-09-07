const Season = require('../modules/Season');

exports.addSeason = async function(SeasonObj) {
    const result = await Season.create(SeasonObj)
    return result.toJSON()
}

exports.deleteSeason = async function(SeasonId) {
    return await Season.destroy({
        where: {
            id: SeasonId
        }
    })
}

exports.updateSeason = async function(SeasonObj, SeasonId) {
    return await Season.update(SeasonObj, {
        where: {
            id: SeasonId
        }
    })
}

exports.getSeasonById = async function(SeasonId) {
    const result = await Season.findByPk(SeasonId);
    if(result) {
        return result.toJSON()
    }
    return null
}

exports.getSeasons = async function(placeId) {
    console.log(placeId)
    const result = await Season.findAll({
        where: {
            placeId
        }
    })
    return JSON.parse(JSON.stringify(result))
}