import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import  {Form, Button, Row, Col, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { logout } from '../store/actions/userActions'
import { listOrders } from '../store/actions/orderActions'


const AdminPanel = ({history, location}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [message, setMessage] = useState(null)
    const [showOrder, setShowOrder] = useState([])

    const dispatch = useDispatch()

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const orderList = useSelector(state => state.orderList)
    const { orders, error, loading } = orderList


    
    useEffect(() => {
        
        if(!userInfo) {
            history.push("/login")            
        } else {
            dispatch(listOrders())
        }
    }, [history, userInfo, dispatch])
    
    
    const logoutHandler = () => {
        dispatch(logout())
        if (!userInfo) {
            history.push('login')
        }
        console.log("log Out")

    }

    return (
        <Row>
            <Col md={3}>
            <h2>Admin Screen</h2>
            <Button variant='danger' onClick={logoutHandler} >Log Out</Button>
            </Col>
            <Col md={9}>
                <h2>My Orders</h2>
                {loading ? (<Loader />) : 
                (
                     <Table striped bordered hover size="sm">
                     <thead>
                         <tr>
                         <th>#</th>
                         <th>Order ID</th>
                         <th>Customer Name</th>
                         <th>Customer Mobile</th>
                         <th>Customer Email</th>
                         <th>Customer Address</th>
                         </tr>
                     </thead>
                {orders.length <= 0 ? (<Loader />) : orders.map((order) => {
                    return (
                        <tbody>
                    <td>#</td>
                    <td><Link to={`/vieworder/${order._id}`}>{order._id}</Link></td>
                    <td>Customer Name</td>
                    <td>Customer Mobile</td>
                    <td>Customer Email</td>
                    <td>Customer Address</td>
                 </tbody>

                    )
                    
                })}
                         {/* <td>#</td>
                         <td>Order ID</td>
                         <td>Customer Name</td>
                         <td>Customer Mobile</td>
                         <td>Customer Email</td>
                         <td>Customer Address</td>
                          */}
                     </Table>
                    
                )
                }
               
               
            </Col>
        </Row>        
    )
}

export default AdminPanel
