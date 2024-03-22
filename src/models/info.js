const mongoose = require('mongoose');

const FoodSchema = new mongoose.Schema({
    name: String,
    calories: Number,
    protein: Number,
    carbs: Number,
    fats: Number,
    sugar: Number,
    fiber: Number,
    origin: String,
    cholestrol: String,
    benefits: String,
});

const Food = new mongoose.model('Food', FoodSchema);

module.exports = Food;