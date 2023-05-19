const Joi = require('joi');
const PASSWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,128})/;

exports.createUserDataValidator = (data) => Joi.object()
    .options({ abortEarly: false }) 
    .keys({
        user: Joi.string().min(3).max(20).required(),
        email: Joi.string().email().required(),
        password: Joi.string().regex(PASSWD_REGEX).required(),
        tweets: Joi.number().min(0).required(), 
        followers: Joi.number().min(0).required(), 
        avatar: Joi.string().required(),
    })
    .validate(data);
    
    exports.updateUserDataValidator = (data) => Joi.object()
    .options({ abortEarly: false }) 
    .keys({
        user: Joi.string().min(3).max(20).required(),
        tweets: Joi.number().min(0).required(), 
        followers: Joi.number().min(0).required(), 
    })
    .validate(data);