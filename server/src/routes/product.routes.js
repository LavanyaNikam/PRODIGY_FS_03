import { Router } from "express";
import {
  listProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";
import { auth, adminOnly } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

const router = Router();

router.get("/", listProducts);
router.get("/:id", getProduct);
router.post("/", auth, adminOnly, upload.single("image"), createProduct);
router.put("/:id", auth, adminOnly, upload.single("image"), updateProduct);
router.delete("/:id", auth, adminOnly, deleteProduct);

export default router;
