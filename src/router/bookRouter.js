import express from 'express';
import * as Controller from '../controller/bookController';
import * as Utils from '../utils/index';
import * as Middleware from '../middleware';
import { addBookSchema, reviewBookSchema, updateBookSchema } from '../validation/bookSchema';

const router = express.Router();

router.post(
    '/', 
    Middleware.validateInput(addBookSchema, 'body'),
    Utils.verifyToken,
    Controller.addBook
);

router.get(
    '/', 
    Utils.verifyToken,
    Middleware.checkIfBookExistsByNameOrTitle,
    Controller.getBooksByAuthorOrTitle
);

router.get(
    '/category', 
    Utils.verifyToken,
    Middleware.checkIfBookExistsByCategory,
    Controller.getBooksByCategory
);

router.patch(
    '/:id', 
    Utils.verifyToken,
    Middleware.validateInput(updateBookSchema, 'body'),
    Middleware.checkIfBookExistsById,
    Controller.updateBookDetails
);

router.delete(
    '/:id', 
    Utils.verifyToken,
    Middleware.checkIfBookExistsById,
    Controller.deleteABook
);

router.patch(
    '/review/:id', 
    Utils.verifyToken,
    Middleware.validateInput(reviewBookSchema, 'body'),
    Middleware.checkIfBookExistsById,
    Controller.reviewBookById
);

router.get(
    '/review/:id', 
    Utils.verifyToken,
    // Middleware.checkIfBookExistsById,
    Middleware.checkIfBookIsReviewed,
    Controller.getCommentOfABook
);

router.get(
    '/review/count/:id', 
    Utils.verifyToken,
    Middleware.checkIfBookExistsById,
    Controller.countCommentOfABook
);

router.delete(
    '/review/:id', 
    Utils.verifyToken,
    Utils.checkIfUserIsAdmin,
    Middleware.checkIfBookIsReviewed,
    Controller.deleteCommentOfABook
);

router.get(
    '/comment', 
    Utils.verifyToken,
    Controller.getHighestOrLowestComments
);

export default router;
