import * as UserServices from '../services/userServices';
import * as Utils from '../utils/index';

export const addUser = async (req, res, next) => {
    try {
        const { body } = req;
        const user = await UserServices.addUser(body);
        const token = await Utils.generateToken(user);
        
        return res.status(201).json({
            code: 201,
            message: 'user created successfully',
            user,
            token
        });
    } catch (error) {
        next(error);
    }
};

export const deleteCommentOfABook = async (req, res, next) => {
    try {
        const user = await UserServices.getUserById(req.params.id);
        const { id } = user;
        await UserServices.deleteABookComment(id);

        return res.status(200).json({
            code: 200,
            message: 'comment deleted successfully'
        });
    } catch (error) {
        next(error);
    }
};
