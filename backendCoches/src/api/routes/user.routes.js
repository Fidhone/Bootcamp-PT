const express = require('express');
const {
  register,
  checkNewUser,
  resendCode,
  login,
  forgotPassword,
  sendPassword,
  modifyPassword,
  update,
  deleteUser,
  getAllUsers,
  getById,
  postFavorite,
} = require('../controllers/user.controller');

const { isAuth, isAuthAdmin } = require('../../middlewares/auth.middleware');

const UserRoutes = express.Router();

UserRoutes.post('/register', register);
UserRoutes.post('/check', checkNewUser);
UserRoutes.post('/resend', resendCode);
UserRoutes.post('/login', login);
UserRoutes.get('/forgotpassword', forgotPassword);
UserRoutes.post('/postFavorite/:_id', postFavorite);
UserRoutes.get('/getAllUsers', [isAuthAdmin], getAllUsers);
UserRoutes.get('/getById/:_id', [isAuthAdmin], getById);
UserRoutes.patch('/changepassword', [isAuth], modifyPassword);
UserRoutes.patch('/update/update', [isAuthAdmin], update);
UserRoutes.delete('/', [isAuth], deleteUser);

//! -------REDIRECT --------------------

UserRoutes.get('/forgotpassword/sendPassword/:id', sendPassword);

module.exports = UserRoutes;
