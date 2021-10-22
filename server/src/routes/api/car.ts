import express from "express";
import carService from "../../services/carService";
import { asyncHandler } from "../getSendResult";

const router = express.Router();
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    return await carService.addCar(req.body);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    return await carService.deleteCar(req.params.id);
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res, next) => {
    return await carService.updateCar(req.params.id, req.body);
  })
);

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const { nowPage, limit } = req.query;
    return await carService.getCars(nowPage, limit);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    return await carService.getCarById(req.params.id);
  })
);

export default router;
