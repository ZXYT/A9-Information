import { Identifier } from "sequelize/types";
import Season, { ISeasonCreation, ISeason } from "../modules/Season";

export const addSeason = async function (SeasonObj: ISeasonCreation) {
  const result = await Season.create(SeasonObj);
  return result.toJSON();
};

export const deleteSeason = async function (SeasonId: number) {
  return await Season.destroy({
    where: {
      id: SeasonId,
    },
  });
};

export const updateSeason = async function (
  SeasonObj: Partial<ISeason>,
  SeasonId: number
) {
  return await Season.update(SeasonObj, {
    where: {
      id: SeasonId,
    },
  });
};

export const getSeasonById = async function (SeasonId: Identifier) {
  const result = await Season.findByPk(SeasonId);
  if (result) {
    return result.toJSON();
  }
  return null;
};

// export const getSeasons = async function (placeId: number) {
//   console.log(placeId);
//   const result = await Season.findAll({
//     where: {
//       placeId,
//     },
//   });
//   return JSON.parse(JSON.stringify(result));
// };
