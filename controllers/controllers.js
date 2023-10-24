const {model} = require('mongoose');
const {Product} = require('../db/mongodb')

const getProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const getProduct = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const createProduct = async (req, res) => {
    const { name, description, price, quantity, category } = req.body;
  
    const product = new Product({
      name,
      description,
      price,
      quantity,
      category,
    });
  
    try {
      await product.save();
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const updateProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body);
      res.json(product);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  const deleteProduct = async (req, res) => {
    try {
      const product = await Product.findByIdAndRemove(req.params.id);
      res.json(product);
      con
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const deleteAllProducts = async (req, res) => {
    try {
      await Product.deleteMany({});
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  const findProduct = async (req, res) => {
    const { name } = req.query;
    try {
      const products = await Product.find({ name: name });
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    deleteAllProducts,
    findProduct,
  };