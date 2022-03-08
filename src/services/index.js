import db from "../db";
import userQueries from "../db/queries";

export const addBook = async (body) => {
    const payload = [
        body.name, body.author, body.quantity, body.price, body.ISBN, body.category,
    ];
    return db.one(userQueries.addBook, payload);
};

export const getBooksById = async (id) => {
    return db.any(userQueries.getBookById, [id])
};

export const getBooks = async (name, author) => {
    return db.any(userQueries.getBooksByAuthorOrTitle, [name, author])
};

export const getBooksByCategory = async (category) => {
    return db.any(userQueries.getBooksByCategory, [category])
};
