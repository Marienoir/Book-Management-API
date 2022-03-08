import express from 'express';
import * as Controller from '../controller';
import * as Middleware from '../middleware';
import { addBookSchema } from '../validation';


const router = express.Router();

router.post(
    '/api/v1/add-book', 
    Middleware.validateInput(addBookSchema, 'body'),
    Controller.addBook
);

router.get(
    '/api/v1/books', 
    Middleware.checkIfBookExistsByNameOrTitle,
    Controller.getBooksByAuthorOrTitle
);

router.get(
    '/api/v1/books/category', 
    Middleware.checkIfBookExistsByCategory,
    Controller.getBooksByCategory
);

export default router;
