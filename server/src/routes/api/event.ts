import express from "express";
import * as eventService from "../../services/eventService";
import { asyncHandler } from "../getSendResult";

const router = express.Router();
router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    return await eventService.addEvent(req.body);
  })
);

router.delete(
  "/:id",
  asyncHandler(async (req, res, next) => {
    return await eventService.deleteEvent(req.params.id);
  })
);

router.put(
  "/:id",
  asyncHandler(async (req, res, next) => {
    return await eventService.updateEvent(req.params.id, req.body);
  })
);

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const { page, limit, id } = req.query;
    return await eventService.getEvents(page, limit, id);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res, next) => {
    return await eventService.getEventById(req.params.id);
  })
);

export default router;
