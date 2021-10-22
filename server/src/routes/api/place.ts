import express from "express";
import * as placeService from "../../services/placeService";
import { asyncHandler } from "../getSendResult";

const router = express.Router();
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    return await placeService.addPlace(req.body);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    return await placeService.deletePlace(req.params.id);
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res, next) => {
    return await placeService.updatePlace(req.params.id, req.body);
  })
);

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    return await placeService.getPlaces();
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    return await placeService.getPlaceById(req.params.id);
  })
);

export default router;
