const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController = require("../controllers/userController")
const BookController = require("../controllers/bookController")

router.get("/test-me", function(req, res) {
    res.send("My first ever api!")
})

router.get("/demoApi", function(req, res) {
    res.send("such coolest api")
})

router.post("/falanaApi", function(req, res) {
    res.send("dhikana")
})

router.get("/test-middleware", function(req, res) {
    res.send("this API,  is testing for Middleware")
})

module.exports = router;