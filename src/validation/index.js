import Joi from 'joi';

export const addBookSchema = {
  schema: Joi.object().keys({
    name: Joi.string().required(),
    author: Joi.string().required(),
    quantity: Joi.number().required(),
    price: Joi.number().required(),
    category:Joi.string().required(),
    ISBN: Joi.string().required(),
  }),
  message: 'Error adding book',
};