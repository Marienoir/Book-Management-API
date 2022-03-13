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

export const updateBookSchema = {
  schema: Joi.object().keys({
    name: Joi.string(),
    author: Joi.string(),
    quantity: Joi.number(),
    price: Joi.number(),
    category:Joi.string(),
    ISBN: Joi.string(),
  }),
  message: 'Error updating book',
};

export const reviewBookSchema = {
  schema: Joi.object().keys({
    comment: Joi.string(),
  }),
  message: 'Error reviewing a book',
};