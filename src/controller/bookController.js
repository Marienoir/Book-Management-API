import * as Bookservices from '../services/bookServices';

export const addBook = async (req, res, next) => {
    try {
        const { body } = req;
        const book = await Bookservices.addBook(body);

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
        const data = await Bookservices.getBooks(name);

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
        const data = await Bookservices.getBooksByCategory(category);

        return res.status(200).json({
            code: 200,
            data,
        });
    } catch (error) {
        next(error);
    }
};

export const updateBookDetails = async (req, res, next) => {
    try {
        const book = await Bookservices.getBookById(req.params.id);
        const { id } = book;
        const updatedBook = await Bookservices.updateABook(id, req.body);

        return res.status(200).json({
            code: 200,
            message: 'book updated successfully',
            data: updatedBook,
        });
    } catch (error) {
        return next(error);
    }
};

export const deleteABook = async (req, res, next) => {
    try {
        const book = await Bookservices.getBookById(req.params.id);
        const { id } = book;
        await Bookservices.deleteABook(id);

        return res.status(200).json({
            code: 200,
            message: 'book deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};

export const reviewBookById = async (req, res, next) => {
    try {
        const book = await Bookservices.getBookById(req.params.id);
        const { id } = book;
        req.body.bookId = id;
        req.body.no_of_comments = 1;
        const reviewedBook = await Bookservices.reviewABook(req.body);
        await Bookservices.countABookComment(req.body,id);
        return res.status(200).json({
            code: 200,
            message: 'review added successfully',
            data: reviewedBook,
        });
    } catch (error) {
        return next(error);
    }
};

export const getCommentOfABook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await Bookservices.getABookComment(id);

        return res.status(200).json({
            code: 200,
            data,
        });
    } catch (error) {
        next(error);
    }
};

export const countCommentOfABook = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await Bookservices.getCountOfBookComment(id);

        return res.status(200).json({
            code: 200,
            data,
        });
    } catch (error) {
        next(error);
    }
};

export const deleteCommentOfABook = async (req, res, next) => {
    try {
        const { id } = req.params;
        await Bookservices.deleteABookComment(id);

        return res.status(200).json({
            code: 200,
            message: 'comment deleted successfully',
        });
    } catch (error) {
        next(error);
    }
};