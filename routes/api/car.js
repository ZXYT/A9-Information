const express = require('express');
const router = express.Router();
const carService = require('../../services/carService');
const { asyncHandler } = require('../getSendResult');

router.post('/', asyncHandler(async (req, res, next) => {
    return await carService.addCar(req.body)
}))

router.delete('/:id', asyncHandler(async (req, res, next) => {
    return await carService.deleteCar(req.params.id)
}))

router.put('/:id', asyncHandler(async (req, res, next) => {
    return await carService.updateCar(req.params.id, req.body)
}))

router.get('/', asyncHandler(async (req, res, next) => {
    const { nowPage, limit } = req.query
    return await carService.getCars(nowPage, limit)
}))

router.get('/:id', asyncHandler(async (req, res, next) => {
    return await carService.getCarById(req.params.id)
}))

module.exports = router;
