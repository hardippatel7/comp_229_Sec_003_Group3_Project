
let ProductModel = require('../models/product');

// Gets all products from the Database and renders the page to list them all.
module.exports.productList = function(req, res, next) {  
    ProductModel.find((err, productsList) => {
        console.log(productsList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.send(productsList)
        }
    });
}

// Processes the data submitted from the Add form to add a new product
module.exports.addProduct = (req, res, next) => {
    const product = new ProductModel({
        name: req.body.name,
        description: req.body.description,
        amount: req.body.amount,
        status: req.body.status
      });
      product.save(product).then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Error occurred while adding product",
      });
    });
}

// Updates a product based on its id.
module.exports.updateProduct = (req, res, next) => {
    const id = req.params.id;
    ProductModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Product not found. Product id : ${id}`,
        });
      } else {
        res.send(data).status(200);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error occurred while updating product information" });
    });
}

// Deletes a product based on its id.
module.exports.deleteProduct = (req, res, next) => {
    const id = req.params.id;
    ProductModel.findByIdAndDelete(id)
    .then((data) => {
        if (!data) {
            res.status(404).res("no data found");
          }else {
            res.send(req.id);
          }
    })
    .catch((err) => {
        res.status(500).send({
          message: "Error occurred while deleting the product. Product id : " + id,
        });
      });
};