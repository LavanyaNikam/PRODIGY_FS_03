import Product from "../models/Product.js";

export const listProducts = async (_req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
};

export const getProduct = async (req, res) => {
  const item = await Product.findById(req.params.id);
  if (!item) return res.status(404).json({ message: "Not found" });
  res.json(item);
};

export const createProduct = async (req, res) => {
  const { name, price, description, category, stock } = req.body;
  const image = req.file?.filename || req.body.image || "";
  const created = await Product.create({
    name,
    price,
    description,
    category,
    stock,
    image,
  });
  res.status(201).json(created);
};

export const updateProduct = async (req, res) => {
  const image = req.file?.filename ? { image: req.file.filename } : {};
  const updated = await Product.findByIdAndUpdate(
    req.params.id,
    { ...req.body, ...image },
    { new: true }
  );
  res.json(updated);
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
};
