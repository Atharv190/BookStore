import express from 'express'
import { getOrderHistory, placeOrder } from '../controller/order.controller.js'
import { protectRoute } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post("/placeorder",protectRoute, placeOrder);
router.get("/history",protectRoute, getOrderHistory);


export default router;

