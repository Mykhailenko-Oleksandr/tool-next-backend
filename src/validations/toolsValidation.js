import { Joi, Segments } from 'celebrate';
import { isValidObjectId } from 'mongoose';

const objectIdValidator = (value, helpers) => {
  const ids = value.split(',');

  for (const id of ids) {
    if (!isValidObjectId(id)) {
      return helpers.message('Invalid id format');
    }
  }

  return value;
};

export const toolIdSchema = {
  [Segments.PARAMS]: Joi.object({
    toolId: Joi.string().custom(objectIdValidator).required(),
  }),
};

export const updateToolSchema = {
  ...toolIdSchema,
  [Segments.BODY]: Joi.object({
    name: Joi.string().min(3).max(96).trim(),
    pricePerDay: Joi.number().min(0),
    categoryId: Joi.string().custom(objectIdValidator),
    description: Joi.object(),
    rentalTerms: Joi.string().min(20).max(1000).trim(),
    specifications: Joi.string().max(1000).trim(),
  }),
};

export const getToolSchema = {
  [Segments.QUERY]: Joi.object({
    page: Joi.number().integer().min(1).default(1),
    perPage: Joi.number().integer().min(5).max(20).default(8),
    category: Joi.string().custom(objectIdValidator),
    search: Joi.string().trim().allow(''),
  }),
};
