const { getProducts, saveProduct } = require("../services/product.services");


module.exports.getProduct = async (req, res, next) => {
    try {
        // const products = await Product.find({ $or: [{ _id: "631ca8b14d2d0e27ece03b02" }, { name: "kfsf" }] });
        // const products = await Product.find({ status: { $ne: "out-of-stock" } });
        // const products = await Product.find({ quantity: { $gt: 100 } });
        // const products = await Product.find({ name: { $in: ["Orange1", "Apple"] } });
        // const products = await Product.find({}, "name quantity");
        // const products = await Product.find({}).limit(1);
        // const products = await Product.find({}).sort({ quantity: -1 });
        // const products = await Product.find({}).select({ name: 1 });
        // const products = await Product.where("name").equals(/\w/).where("quantity").gt(100).limit(2)
        const product = await getProducts();
        res.status(200).json({
            status: true,
            message: "Properly find data.",
            data: product
        })
    } catch (error) {

        res.status(400).json({
            status: false,
            message: "Can't get the data.",
            error: error.message
        })
    }
}

module.exports.saveProduct = async (req, res, next) => {

    try {
        // save or create

        // save
        // const product = new Product(req.body);

        // if (product.quantity === 0) {
        //   product.status = "out-of-stock"
        // }

        // const result = await product.save();

        // create
        const result = await saveProduct(req.body);

        result.logger();

        res.status(200).json({
            "status": "success",
            "message": "Successfully save data",
            "data": result
        })
    } catch (error) {
        res.status(400).json({
            status: "false",
            message: "Data couldn't be inserted!",
            error: error.message
        })
    }

}