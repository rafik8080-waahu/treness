const joi = require("joi")
//register user validation
const validateAddUser = new joi.object({
    name:joi.string().min(4).required().max(150),
    email:joi.string().min(10).required().max(200).email().required(),
    password:joi.string().min(8).max(50).required(),
})

module.exports = { validateAddUser }