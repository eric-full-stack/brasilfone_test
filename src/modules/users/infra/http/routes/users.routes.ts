import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';

import UsersController from '../controllers/UsersController';
 

const usersRouter = Router();

const usersController = new UsersController();
 
 

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email({ tlds: { allow: false } }).required(),
      password: Joi.string().min(6).max(6).required(),
    },
  }),
  usersController.create,
);
 
export default usersRouter;
