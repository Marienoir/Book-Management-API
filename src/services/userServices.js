import db from "../db";
import userQueries from "../db/queries/userQueries";

export const addUser = async (body) => {
    const payload = [
        body.full_name, body.role,
    ];
    return db.one(userQueries.addUser, payload);
};

export const addAdmin = async (body) => {
    const payload = [
        body.full_name, body.role,
    ];
    return db.one(userQueries.addAdmin, payload);
};

export const getUserById = async (id) => {
    return db.one(userQueries.getUserById, [id])
};

export const deleteABookComment = async (id) => {
    return db.any(userQueries.deleteBookCommentById, [id])
};
