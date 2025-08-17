import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
      {
        product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        name: String,
        price: Number,
        qty: Number
      }
    ],
    amount: Number,
    shippingAddress: String,
    status: {
      type: String,
      enum: ["placed", "packed", "shipped", "delivered"],
      default: "placed"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
