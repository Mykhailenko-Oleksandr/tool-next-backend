import { celebrate, Joi, Segments } from 'celebrate';

export const createToolValidation = celebrate({
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string().trim().required(),
    description: Joi.string().trim().required(),
    price: Joi.number().positive().required(),
    category: Joi.string().trim().required(),
  }),
});
