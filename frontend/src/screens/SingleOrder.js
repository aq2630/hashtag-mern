import React, { useEffect } from 'react'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderById } from '../store/actions/orderActions'


const SingleOrder = ({ match }) => {

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
                <h4>Order Details</h4>
                <ul>
                    <li>Order ID {order._id}</li>
                    <li>Customer Name : {order.shippingDetails.fullName}</li>
                    <li>Customer Mobile Number : {order.shippingDetails.mobileNumber}</li>
                    <li>Customer Email : {order.shippingDetails.email}</li>
                    <li>Order Items:</li>
                    <ul>
                    {order.orderItems.map((orderItem, index) => {
                      return(
                          <li key={index}>{orderItem.name}</li>
                      )  
                    })}
                </ul>
                </ul>

                </>
            )}
           
            
        </div>
    )
}

export default SingleOrder
