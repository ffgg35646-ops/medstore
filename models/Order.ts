import mongoose, { Schema, models, model } from "mongoose";

const OrderSchema = new Schema(
  {
    userEmail: {
      type: String,
      required: true,
    },

    items: [
      {
        id: String,
        name: String,
        price: Number,
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],

    total: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const Order = models.Order || model("Order", OrderSchema);

export default Order;
