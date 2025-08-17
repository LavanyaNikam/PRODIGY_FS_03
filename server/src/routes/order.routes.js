import { Router } from "express";
import {
  createOrder,
  myOrders,
  listOrders,
} from "../controllers/order.controller.js";
import { auth, authRequired, adminOnly } from "../middleware/auth.js";

const router = Router();

router.post("/", auth, authRequired, createOrder);
router.get("/mine", auth, authRequired, myOrders);
router.get("/", auth, adminOnly, listOrders);

export default router;
