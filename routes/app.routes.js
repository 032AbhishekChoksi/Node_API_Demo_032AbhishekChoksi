const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categories.controller");
// Routes (Route)

console.log("routes");
router.get("/category", categoryController.findAll);

module.exports = router;