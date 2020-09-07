const express = require('express');
const router = express.Router();
const mapservice = require('../../services/mapService');
const { asyncHandler } = require('../getSendResult');

router.post('/', asyncHandler(async (req, res, next) => {
    return await mapservice.addMap(req.body)
}))

router.delete('/:id', asyncHandler(async (req, res, next) => {
    return await mapservice.deleteMap(req.params.id)
}))

router.put('/:id', asyncHandler(async (req, res, next) => {
    return await mapservice.updateMap(req.params.id, req.body)
}))

router.get('/', asyncHandler(async (req, res, next) => {
    const { page, limit, placeId, name } = req.query;
    return await mapservice.getMaps(page, limit, placeId, name)
}))

router.get('/:id', asyncHandler(async (req, res, next) => {
    return await mapservice.getMapById(req.params.id)
}))

module.exports = router;