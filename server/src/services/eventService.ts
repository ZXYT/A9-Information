import { Identifier } from "sequelize/types";
import Event, { IEvent, IEventCreation } from "../modules/Event";

export const addEvent = async function (EventObj: IEventCreation) {
  try {
    const result = await Event.create(EventObj);
    return result.toJSON();
  } catch (e) {
    console.log(e);
  }
};

export const deleteEvent = async function (EventId: number) {
  return await Event.destroy({
    where: {
      id: EventId,
    },
  });
};

export const updateEvent = async function (
  EventId: number,
  EventObj: Partial<IEvent>
) {
  return await Event.update(EventObj, {
    where: {
      id: EventId,
    },
  });
};

export const getEventById = async function (EventId: Identifier) {
  const result = await Event.findByPk(EventId);
  if (result) {
    return result.toJSON();
  }
  return null;
};

export const getEvents = async function (
  page = 1,
  limit = 10,
  eventClass: number
) {
  let where: any = {};
  if (eventClass && eventClass != 0) {
    where.eventClass = eventClass;
  }
  const result = await Event.findAndCountAll({
    where,
    offset: (page - 1) * limit,
    limit: +limit,
  });
  return JSON.parse(JSON.stringify(result));
};
