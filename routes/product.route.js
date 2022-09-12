const express = require("express");
const router = express.Router();
const productController = require("../controller/product.controller.js");

router.route("/")
    .get(productController.getProduct)
    .post(productController.saveProduct)

module.exports = router;