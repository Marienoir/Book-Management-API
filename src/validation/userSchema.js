import Joi from 'joi';

export const addUserSchema = {
  schema: Joi.object().keys({
    full_name: Joi.string().required(),
    role: Joi.string(),
  }),
  message: 'Error adding user',
};
