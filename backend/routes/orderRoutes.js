import express from 'express'
import { addOrderItems, getOrderById, getOrders } from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').post(addOrderItems)
router.route('/').get(protect, getOrders)
router.route('/:id').get(getOrderById)

export default router