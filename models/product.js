const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  videoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' },
  name: String,
  price: Number,
  description: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;