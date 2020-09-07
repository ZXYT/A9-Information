const Event = require('../modules/Event');

exports.addEvent = async function (EventObj) {
    const result = await Event.create(EventObj)
    return result.toJSON()
}

exports.deleteEvent = async function (EventId) {
    return await Event.destroy({
        where: {
            id: EventId
        }
    })
}

exports.updateEvent = async function (EventId, EventObj) {
    return await Event.update(EventObj, {
        where: {
            id: EventId
        }
    })
}

exports.getEventById = async function (EventId) {
    const result = await Event.findByPk(EventId);
    if (result) {
        return result.toJSON()
    }
    return null
}

exports.getEvents = async function (page = 1, limit = 10, eventClass) {
    let where = {}
    if (eventClass && eventClass != 0) {
        where.eventClass = eventClass
    }
    const result = await Event.findAndCountAll({
        where,
        offset: (page - 1) * limit,
        limit: +limit,
    })
    return JSON.parse(JSON.stringify(result))
}