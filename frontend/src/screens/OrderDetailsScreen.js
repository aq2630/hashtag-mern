import React, { useEffect } from 'react'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../store/actions/orderActions'


const OrderDetailsScreen = ({ match }) => {

    const dispatch = useDispatch()

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, error, loading } = orderDetails

    console.log(orderDetails)


    useEffect(() => {
        dispatch(getOrderById(match.params.id))

    },[dispatch, match])

    return (
        <div>
            {loading ? (<Loader />) 
            : error ? (<Message variant="danger">{error}</Message>)
            : (
                <>
                <h3>Thank You {order.shippingDetails.fullName} for Placing an Order</h3>
                <p>Please Save this Order id : {order._id}</p>
                </>
            )}
           
            
        </div>
    )
}

export default OrderDetailsScreen
