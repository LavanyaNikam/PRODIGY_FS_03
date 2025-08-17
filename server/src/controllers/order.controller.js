import Order from "../models/Order.js";
import Product from "../models/Product.js";

export const createOrder = async (req, res) => {
  const { items, shippingAddress } = req.body; // [{productId, qty}]
  if (!req.user?.id) return res.status(401).json({ message: "Unauthorized" });

  const products = await Product.find({
    _id: { $in: items.map((i) => i.productId) },
  });

  const productMap = Object.fromEntries(
    products.map((p) => [p._id.toString(), p])
  );

  const lineItems = items.map((i) => ({
    product: i.productId,
    name: productMap[i.productId].name,
    price: productMap[i.productId].price,
    qty: i.qty,
  }));

  const amount = lineItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  const order = await Order.create({
    user: req.user.id,
    items: lineItems,
    amount,
    shippingAddress,
  });

  res.status(201).json(order);
};

export const myOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).sort({ createdAt: -1 });
  res.json(orders);
};

export const listOrders = async (_req, res) => {
  const orders = await Order.find()
    .populate("user", "name email")
    .sort({ createdAt: -1 });
  res.json(orders);
};
