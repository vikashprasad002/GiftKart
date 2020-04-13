const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [
    {
      productData: {
        type: Object,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      }
    }
  ],
  user: {
    email: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }
  },
  totalAmount: {
    type: Number,
    required: true
  },
  orderDate: {
    type: Date,
    required: true
  },
  address: {
    name: {
      type: String,
      required: true
    },
    house: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    pin: {
      type: Number,
      required: true
    }
  }
});

module.exports = mongoose.model('Order', orderSchema);
