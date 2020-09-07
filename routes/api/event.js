const express = require('express');
const router = express.Router();
const eventService = require('../../services/eventService');
const { asyncHandler } = require('../getSendResult');

router.post('/', asyncHandler(async (req, res, next) => {
    return await eventService.addEvent(req.body)
}))

router.delete('/:id', asyncHandler(async (req, res, next) => {
    return await eventService.deleteEvent(req.params.id)
}))

router.put('/:id', asyncHandler(async (req, res, next) => {
    return await eventService.updateEvent(req.params.id, req.body)
}))

router.get('/', asyncHandler(async (req, res, next) => {
    const { page, limit, id } = req.query
    return await eventService.getEvents(page, limit, id)
}))

router.get('/:id', asyncHandler(async (req, res, next) => {
    return await eventService.getEventById(req.params.id)
}))

module.exports = router;
