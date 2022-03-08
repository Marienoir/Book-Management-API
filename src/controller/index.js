import * as services from '../services/index';

export const addBook = async (req, res, next) => {
    try {
        const { body } = req;
        const book = await services.addBook(body);

        return res.status(201).json({
            code: 201,
            message: 'book created successfully',
            book,
        });
    } catch (error) {
        next(error);
    }
};

export const getBooksByAuthorOrTitle = async (req, res, next) => {
    try {
        const { name } = req.query;
        const data = await services.getBooks(name);

        return res.status(200).json({
            code: 200,
            data,
        });
    } catch (error) {
        next(error);
    }
};

export const getBooksByCategory = async (req, res, next) => {
    try {
        const { category } = req.query;
        const data = await services.getBooksByCategory(category);

        return res.status(200).json({
            code: 200,
            data,
        });
    } catch (error) {
        next(error);
    }
};