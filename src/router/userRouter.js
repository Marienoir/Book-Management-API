import express from 'express';
import * as Controller from '../controller/userController';
import * as Middleware from '../middleware';
import * as Utils from '../utils/index';
import { addUserSchema } from '../validation/userSchema';

const router = express.Router();

router.post(
    '/', 
    Middleware.validateInput(addUserSchema, 'body'),
    Controller.addUser
);

router.post(
    '/admin', 
    Utils.verifyToken('user'),
    Middleware.validateInput(addUserSchema, 'body'),
    Controller.addAdmin
);

export default router;
