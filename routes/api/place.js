const express = require('express');
const router = express.Router();
const placeService = require('../../services/placeService');
const { asyncHandler } = require('../getSendResult');

router.post('/', asyncHandler(async (req, res, next) => {
    return await placeService.addPlace(req.body)
}))

router.delete('/:id', asyncHandler(async (req, res, next) => {
    return await placeService.deletePlace(req.params.id)
}))

router.put('/:id', asyncHandler(async (req, res, next) => {
    return await placeService.updatePlace(req.params.id, req.body)
}))

router.get('/', asyncHandler(async (req, res, next) => {
    return await placeService.getPlaces()
}))

router.get('/:id', asyncHandler(async (req, res, next) => {
    return await placeService.getPlaceById(req.params.id)
}))

module.exports = router;
