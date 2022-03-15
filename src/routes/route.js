const express = require('express');
const router = express.Router();

const authorController = require('../controller/authorController');
const blogController = require('../controller/blogController');

router.post("/createAuthor", authorController.createAuthor)
router.post("/createBlog", blogController.createBlog)

router.get("/getBlog", blogController.getBlog)
router.put("/updateBlog/:blogId", blogController.updateBlog)
router.delete("/deleteBlogById/:blogId", blogController.deleteBlogById)
router.delete("/deleteByQueryParams", blogController.deletedByQueryParams)

module.exports = router;