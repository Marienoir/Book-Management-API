import express from 'express';
import * as Controller from '../controller/bookController';
import * as UserController from '../controller/userController';
import * as Utils from '../utils/index';
import * as Middleware from '../middleware';
import { addBookSchema, reviewBookSchema, updateBookSchema } from '../validation/bookSchema';

const router = express.Router();

router.post(
    '/', 
    Middleware.validateInput(addBookSchema, 'body'),
    Utils.verifyToken('user'),
    Controller.addBook
);

router.get(
    '/', 
    Utils.verifyToken('user'),
    Middleware.checkIfBookExistsByNameOrTitle,
    Controller.getBooksByAuthorOrTitle
);

router.get(
    '/category', 
    Utils.verifyToken('user'),
    Middleware.checkIfBookExistsByCategory,
    Controller.getBooksByCategory
);

router.patch(
    '/:id', 
    Utils.verifyToken('user'),
    Middleware.validateInput(updateBookSchema, 'body'),
    Middleware.checkIfBookExistsById,
    Controller.updateBookDetails
);

router.delete(
    '/:id', 
    Utils.verifyToken('user'),
    Middleware.checkIfBookExistsById,
    Controller.deleteABook
);

router.patch(
    '/review/:id', 
    Utils.verifyToken('user'),
    Middleware.validateInput(reviewBookSchema, 'body'),
    Middleware.checkIfBookExistsById,
    Controller.reviewBookById
);

router.get(
    '/review/:id', 
    Utils.verifyToken('user'),
    Middleware.checkIfBookExistsById,
    Controller.getCommentOfABook
);

router.get(
    '/review/count/:id', 
    Utils.verifyToken('user'),
    Middleware.checkIfBookExistsById,
    Controller.countCommentOfABook
);

router.delete(
    '/review/:id', 
    Utils.verifyToken('admin'),
    Utils.checkIfUserIsAdmin,
    Middleware.checkIfBookExistsById,
    Controller.deleteCommentOfABook
);


export default router;
