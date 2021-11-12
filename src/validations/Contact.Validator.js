const Joi = require("joi");
const ContactSchema = Joi.object({
    firstname: Joi.string().required().messages({
        "string.base":  `First name should be a type of string.`,
        "string.empty": `First name cannot be empty`,
        "any.required": `First name is required`,
    }),
    lastname: Joi.string().required().messages({
        "string.base":  `Last name should be a type of string.`,
        "string.empty": `Last name cannot be empty`,
        "any.required": `Last name is required`,
    }),
    address: Joi.string().required().messages({
        "string.base":  `Address should be a type of string.`,
        "string.empty": `Address cannot be empty`,
        "any.required": `Address is required`,
    }),
    email: Joi.string().email().trim(true).required().messages({
        "string.base":  `Email should be a type of string.`,
        "string.empty": `Email cannot be empty`,
        "string.email": `Email format is invalid `,
        "any.required": `Email is required`,
    }),
 
}).unknown().options({ abortEarly: false });

const ContactupdateSchema = Joi.object({
    firstname: Joi.string().messages({
        "string.base":  `First name should be a type of string.`,
        "string.empty": `First name cannot be empty`,
    }),
    lastname: Joi.string().messages({
        "string.base":  `Last name should be a type of string.`,
        "string.empty": `Last name cannot be empty`,
    }),
    address: Joi.string().messages({
        "string.base":  `Address should be a type of string.`,
        "string.empty": `Address cannot be empty`,
    }),
    email: Joi.string().email().trim(true).messages({
        "string.base":  `Email should be a type of string.`,
        "string.empty": `Email cannot be empty`,
        "string.email": `Email format is invalid `,
    }),
 
}).unknown().options({ abortEarly: false });

module.exports = ContactSchema;
module.exports = ContactupdateSchema;
