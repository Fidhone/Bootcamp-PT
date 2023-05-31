const express = require('express');
const { registerCar, updateCar } = require('../controllers/car.controller');

const { isAuthAdmin } = require('../../middlewares/auth.middleware');

const CarRoutes = express.Router();

CarRoutes.post('/registerCar', [isAuthAdmin], registerCar);
CarRoutes.patch('/updateCar/:_id', [isAuthAdmin], updateCar);

module.exports = CarRoutes;
