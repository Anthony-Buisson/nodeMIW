import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    date: Date,
    title: String,
    text: String,
    food_code: String,
});

export const commentModel = mongoose.model('comment',
    commentSchema, 'comments');