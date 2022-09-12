const Product = require("../models/Product.js");

module.exports.getProducts = async () => {
    const result = await Product.find({});
    return result;
}

module.exports.saveProduct = async (data) => {
    const result = await Product.create(data);
    return result;
}