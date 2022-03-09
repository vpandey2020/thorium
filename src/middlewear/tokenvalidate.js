const jwt = require("jsonwebtoken");
const UserModel = require('../models/userModel')

const validateToken = async function(req, res, next) {
    let id = req.params.userId
    let user = await UserModel.findById(id);
    if (!user) return res.send({ status: false, msg: "User ID does not exist" });

    let token = req.headers["x-auth-token"];

    if (!token)
        return res.send({ status: false, msg: "[x-auth-token] must be provided" });

    let tokenValidation = jwt.verify(token, "vipinpandey");
    console.log(tokenValidation)

    if (tokenValidation.userId != id)
        return res.send({ status: false, msg: "wrong token" });
    next();
};

module.exports.validateToken = validateToken;