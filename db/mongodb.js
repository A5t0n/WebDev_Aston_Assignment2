const { number } = require('joi');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:Number,
    quantity:Number,
    category: String,
});

const Product = mongoose.model('Product',productSchema);

const connectToDatabase = () => {
    mongoose.connect('mongodb+srv://astonvarghese8:Lionelmessi10@marketplace.hfli16u.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    });

    const db = mongoose.connection;

    db.on('error',(error) => console.error(error));
    db.once('open',() => console.log('Connected to MongoDB'));
};

module.exports = { connectToDatabase,Product };