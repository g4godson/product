var Product = require('./../controllers/products.js')
module.exports = function(app){
    app.get('/api/products', Product.getAllProducts);
    app.post('/api/products/add', Product.addProduct);
    app.get('/api/product/:id', Product.getOneProduct);

    app.delete("/api/product/:id", Product.deleteProduct);

    app.put("/api/product/:id", Product.updateProduct);
}