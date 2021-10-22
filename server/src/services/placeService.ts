import { Identifier } from "sequelize/types";
import Place, { IPlaceCreation, IPlace } from "../modules/Place";

export const addPlace = async function (PlaceObj: IPlaceCreation) {
  const result = await Place.create(PlaceObj);
  return result.toJSON();
};

export const deletePlace = async function (PlaceId: number) {
  return await Place.destroy({
    where: {
      id: PlaceId,
    },
  });
};

export const updatePlace = async function (
  PlaceId: number,
  PlaceObj: Partial<IPlace>
) {
  return await Place.update(PlaceObj, {
    where: {
      id: PlaceId,
    },
  });
};

export const getPlaceById = async function (PlaceId: Identifier) {
  const result = await Place.findByPk(PlaceId);
  if (result) {
    return result.toJSON();
  }
  return null;
};

export const getPlaces = async function () {
  const result = await Place.findAll();
  return JSON.parse(JSON.stringify(result));
};
