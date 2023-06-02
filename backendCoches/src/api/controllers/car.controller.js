const Car = require('../models/car.model');
const dotenv = require('dotenv');
const setError = require('../../helpers/handle-error');
dotenv.config();

//! ------------------------------------------------------------------------
//? -------------------------- NUEVO VEHICULO -------------------------------------
//! ------------------------------------------------------------------------

const registerCar = async (req, res, next) => {
  try {
    const newCar = new Car(req.body);
    const postCar = await newCar.save();
    return postCar
      ? res.status(200).json(postCar)
      : res.status(404).json('Error create Car');
  } catch (error) {
    return next(
      setError(500 || error.code, 'General error create car' || error.message)
    );
  }
};

//! ------------------------------------------------------------------------
//? -------------------------- ACTUALIZAR VEHICULO -------------------------------------
//! ------------------------------------------------------------------------

const updateCar = async (req, res, next) => {
  try {
    const { _id } = req.params;
    const updatedCar = req.body;

    const result = await Car.findByIdAndUpdate(_id, updatedCar, { new: true });

    if (result) {
      return res.status(200).json('update car');
    } else {
      return res.status(404).json('Car not found');
    }
  } catch (error) {
    return next(
      setError(500 || error.code, 'General error update car' || error.message)
    );
  }
};

//! ------------------------------------------------------------------------
//? -------------------------------BORRAR VEHICULO----------------------------------
//! ------------------------------------------------------------------------

const deleteCar = async (req, res, next) => {
  try {
    const { _id } = req.params;
    await Car.findByIdAndDelete(_id);
    if (await Car.findById(_id)) {
      return res.status(404).json('Dont delete');
    } else {
      return res.status(200).json('ok delete');
    }
  } catch (error) {
    return next(error);
  }
};

//! ------------------------------------------------------------------------
//? -------------------------VER TODOS LOS VEHICULOS------------------------
//! ------------------------------------------------------------------------

const getAllCars = async (req, res, next) => {
  try {
    const getAllCar = await Car.find();
    if (getAllCar) {
      return res.status(200).json(getAllCar);
    } else {
      return res.status(404).json('Error to getAll CONTROLLER');
    }
  } catch (error) {
    return next(error);
  }
};

//! ------------------------------------------------------------------------
//? -------------------------VER VEHICULOS POR ID------------------------
//! ------------------------------------------------------------------------

const getById = async (req, res, next) => {
  try {
    const { _id } = req.params;

    const carById = await Car.findById(_id);
    if (carById) {
      return res.status(200).json(carById);
    } else {
      return res.status(404).json('Error controller GetById Car');
    }
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  registerCar,
  updateCar,
  deleteCar,
  getAllCars,
  getById,
};
