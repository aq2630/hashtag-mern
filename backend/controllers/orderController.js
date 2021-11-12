import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.js'

// @desc create new Order 
// @route POST /api/orders
// @access public

const addOrderItems = asyncHandler( async (req, res) => {
    const { 
        orderItems,
        productName,
        shippingDetails,
        itemsPrice,
        shippingPrice,
        totalPrice,
    } = req.body

    if(orderItems && orderItems.length === 0) {
        res.status(400)
        throw new Error ("No Order Items")
    } 
    else {
        const order = new Order(
            {
                orderItems,
                productName,
                shippingDetails,
               itemsPrice,
               shippingPrice,
               totalPrice,

            }
        )
        const createdOrder = await order.save()
        res.status(201).json(createdOrder)
    }   

}
)


    // @desc Fetch all Orders
    // @route GET /api/orders
    // @access private

    const getOrders = asyncHandler ( async (req, res) => {
        const orders = await Order.find({})
        res.json(orders)

    }
    )



// @desc create new Order 
// @route POST /api/orders
// @access public

const getOrderById = asyncHandler( async (req, res) => {
   const order = await Order.findById(req.params.id)
   if (order) {
    res.json(order)
   } else {
    res.status(404)
    throw new Error('Order Not Found')

   }
}
)


export {
    addOrderItems,
    getOrderById,
    getOrders
}