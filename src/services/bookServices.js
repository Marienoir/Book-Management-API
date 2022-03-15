import db from "../db";
import bookQueries from "../db/queries/bookQueries";

export const addBook = async (body) => {
    const payload = [
        body.name, body.author, body.quantity, body.price, body.ISBN, body.category,
    ];
    return db.one(bookQueries.addBook, payload);
};

export const getBookById = async (id) => {
    return db.oneOrNone(bookQueries.getBookById, [id])
};

export const getReviewedBookById = async (id) => {
    return db.oneOrNone(bookQueries.getReviewedBookById, [id])
};

export const getBooks = async (name, author) => {
    return db.any(bookQueries.getBooksByAuthorOrTitle, [name, author])
};

export const getBooksByCategory = async (category) => {
    return db.any(bookQueries.getBooksByCategory, [category])
};

export const updateABook = async (id, body) => {
    return db.oneOrNone(bookQueries.updateBookById, [body.name, body.author, body.quantity, body.price, body.ISBN, body.category, id]);
};

export const deleteABook = async (id) => {
    return db.none(bookQueries.deleteBookById, [id]);
};

export const reviewABook = async (body) => {
    const payload = [
        body.bookId, body.comment,
    ];
    return db.one(bookQueries.reviewBookById, payload);
};

export const getABookComment = async (id) => {
    return db.any(bookQueries.getAllCommentsOfABook, [id])
};

export const countABookComment = async (body, id) => {
    return db.any(bookQueries.countCommentsOfABook, [body.no_of_comments, id])
};

export const reduceCountCommentsOfABook = async (body, id) => {
    return db.any(bookQueries.reduceCountCommentsOfABook, [body.no_of_comments, id])
};

export const getCountOfBookComment = async (id) => {
    return db.any(bookQueries.getCountCommentsOfABook, id)
};

export const deleteABookComment = async (id) => {
    return db.none(bookQueries.deleteBookCommentById, [id])
};

export const getLowestComments = async () => {
    return db.oneOrNone(bookQueries.getLowestComments)
};

export const getHighestComments = async () => {
    return db.oneOrNone(bookQueries.getHighestComments)
};
