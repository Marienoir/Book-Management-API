import db from "../db";
import bookQueries from "../db/queries/bookQueries";

export const addBook = async (body) => {
    const payload = [
        body.name, body.author, body.quantity, body.price, body.ISBN, body.category,
    ];
    return db.one(bookQueries.addBook, payload);
};

export const getBookById = async (id) => {
    return db.one(bookQueries.getBookById, [id])
};

export const getBooks = async (name, author) => {
    return db.any(bookQueries.getBooksByAuthorOrTitle, [name, author])
};

export const getBooksByCategory = async (category) => {
    return db.any(bookQueries.getBooksByCategory, [category])
};

export const updateABook = async (id, body) => {
    return db.one(bookQueries.updateBookById, [body.name, body.author, body.quantity, body.price, body.ISBN, body.category, id]);
};

export const deleteABook = async (id) => {
    return db.none(bookQueries.deleteBookById, [id]);
};

export const reviewABook = async (id, body) => {
    return db.one(bookQueries.reviewBookById, [body.comment, id]);
};

export const getABookComment = async (id) => {
    return db.any(bookQueries.getAllCommentsOfABook, [id])
};

export const countABookComment = async (id) => {
    return db.one(bookQueries.countCommentsOfABook, [id])
};