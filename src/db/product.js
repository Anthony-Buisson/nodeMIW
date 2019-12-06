import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    _id: String,
    name: String,
    brand: String,
    bar_code: Number,
    grade: Number,
    pictures: [Array],
    quantity: [String],
    ingredients: [Object],
});

export const productModel = mongoose.model('product',
    productSchema, 'products');