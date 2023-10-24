const { Router } = require('express');
const {Product} = require('../db/mongodb');
const {getProduct,getProducts,createProduct,updateProduct,deleteProduct,deleteAllProducts,findProduct} = require('../controllers/controllers');
const { name } = require('ejs');

const setupRoutes = (app) => {
    const router = Router();
    router.post('/api/products',(req,res)=>{
        Product.create(req.body)
        .then(data=>res.send(data))
        .catch(err=>console.log(err))
    })

    router.get('/api/products',getProducts);
    router.get('/api/products/:id', getProduct);
    router.post('/api/products', createProduct);
    router.put('/api/products/:id', updateProduct);
    router.delete('/api/products/:id',deleteProduct);
    router.delete('/api/products',deleteAllProducts);
    router.get('/api/products?name=[kw]',findProduct)

    app.use('/', router);
};

module.exports = {setupRoutes};