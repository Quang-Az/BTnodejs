const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const { toJSON, paginate } = require('./plugins');
const { roles } = require('../config/roles');

const categoriesSchema = mongoose.Schema(
  {
    categories_id: {
      type: String,
      required: true,
      trim: true,
    },

  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
categoriesSchema.plugin(toJSON);
categoriesSchema.plugin(paginate);


/**
 * @typedef Categories
 */
const Categories = mongoose.model('Categories', categoriesSchema);

module.exports = Categories;
