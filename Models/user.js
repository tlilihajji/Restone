const Joi = require('joi');
const Schema = Joi.object().keys({
    username: Joi.string().min(3).max(255).required(),
    password: Joi.string().min(3).max(255).required(),
    email: Joi.string().email().unique().required(),
}).options({abortEarly: false})
module.exports = Schema