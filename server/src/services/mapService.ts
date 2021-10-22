import { Identifier } from "sequelize/types";
import Map, { IMapCreation, IMap } from "../modules/Map";

export const addMap = async function (mapObj: IMapCreation) {
  console.log(mapObj);
  const result = await Map.create(mapObj);
  return result.toJSON();
};

export const deleteMap = async function (mapId: number) {
  return await Map.destroy({
    where: {
      id: mapId,
    },
  });
};

export const updateMap = async function (mapId: number, mapObj: Partial<IMap>) {
  return await Map.update(mapObj, {
    where: {
      id: mapId,
    },
  });
};

export const getMapById = async function (mapId: Identifier) {
  const result = await Map.findByPk(mapId);
  if (result) {
    return result.toJSON();
  }
  return null;
};

export const getMaps = async function (
  page = 1,
  limit = 10,
  placeId: any,
  name: any
) {
  let where: any = {};
  if (placeId) {
    where.placeId = placeId;
  }
  if (name) {
    where.name = name;
  }
  console.log(where);
  const result = await Map.findAndCountAll({
    offset: (page - 1) * limit,
    limit: +limit,
    where,
  });
  return JSON.parse(JSON.stringify(result));
};
