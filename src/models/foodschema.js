const mongoose = require('mongoose');
const express =require("express");

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  calories: {
    type: Number,
    required: true,
  },
  // You can add more nutritional values like carbohydrates, vitamins, etc. as needed.

  // Add any other properties you want for your food items.

  // Timestamps to track when the food item was created and last updated.
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Food = mongoose.model('Food', foodSchema);

module.exports = Food;
