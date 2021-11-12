import React, { useState, useEffect } from 'react'
import FormContainer from '../components/FormContainer'
import { Form, Container, Button, Row, Col, Card,  ListGroup} from 'react-bootstrap'
import OrderForm from '../components/OrderForm'
import Message from '../components/Message'
import { createOrder } from '../store/actions/orderActions'
import { useDispatch, useSelector } from 'react-redux'
import {TextField, Radio, FormControlLabel  } from '@material-ui/core';

const PlaceOrder = ( { history }) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
  
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart  

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, success, error } = orderCreate

    const shippingPrice = cartItems.length === 0 ? 0 : 200 
    const itemsPrice = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(0)
    const totalPrice = Number(Number(itemsPrice) + Number(shippingPrice)).toFixed(0)

    useEffect(() => {
    if(success && email) {
        history.push(`/orders/${order._id}`)

        // eslint-disable-next-line
    }
    },[success,history]) 

    const placeOrderHandler = () => {
        if (fullName === "" || email === "" || mobileNumber === "" || address === "" || city === "") {
            alert("Plase Fill Complete Form")
        } else {
            dispatch(createOrder({
                orderItems:cart.cartItems,
                shippingDetails:{
                    fullName,
                    email,
                    mobileNumber,
                    address,
                    city
                },
                itemsPrice,
                shippingPrice,
                totalPrice                       
    
            }))
        }


    }

   

    return (
        <div>
            <Container>
                <Row >
                    <Col className='mb-3' md={6}>
                        <Form>
                            <TextField 
                                className="mb-2" 
                                onChange={(e) => setFullName(e.target.value)} 
                                name='fullName' 
                                fullWidth  
                                label="Full Name"
                                margin="dense"
                                color="secondary" 
                                variant="outlined"
                                />
                            <TextField 
                                className="mb-2" 
                                onChange={(e) => setEmail(e.target.value)} 
                                name='email' 
                                type="email"
                                margin="dense" 
                                fullWidth  
                                label="Email Address" 
                                variant="outlined"
                                color="secondary" 
                            />
                            <TextField 
                                className="mb-2" 
                                onChange={(e) => setMobileNumber(e.target.value)} 
                                name='mobileNumber' 
                                fullWidth
                                margin="dense"  
                                label="Mobile Number" 
                                variant="outlined"
                                color="secondary" 
                            />
                            <TextField 
                                className="mb-2" 
                                onChange={(e) => setAddress(e.target.value)} 
                                name='address' 
                                fullWidth
                                margin="dense"  
                                label="Address" 
                                variant="outlined"
                                color="secondary" 
                            />
                            <TextField 
                                className="mb-2" 
                                onChange={(e) => setCity(e.target.value)} 
                                name='city' 
                                fullWidth
                                margin="dense"  
                                label="City" 
                                variant="outlined" 
                            />
                            <Form.Group>
                            <Form.Label as="legend">
                                Payment Method
                            </Form.Label>
                            <Form.Check 
                            type='radio' 
                            label="Cash On Delivery" 
                            id="cod" 
                            name='cashondelivery'
                            value='cod'
                            defaultChecked                  
                            >
                            <FormControlLabel value="cod" control={<Radio />} checked label="Cash on Delivery" />  
                                </Form.Check>
                            </Form.Group>
                            <Button 
                                className="btn-block"
                                onClick={placeOrderHandler}
                                disabled={cartItems.length === 0}
                                >
                                Place Order
                            </Button>
                        </Form>
                    {/* <Form>                          
                <Form.Group controlId="fullname">                   
                    <Form.Control required onChange={(e) => setFullName(e.target.value)} name='fullName' type="text" value={fullName} placeholder="Enter Full Name" />
                </Form.Group>
                <Form.Group controlId="email">                    
                    <Form.Control required onChange={(e) => setEmail(e.target.value)} name='email' type="email" value={email} placeholder="Enter Email" />
                </Form.Group> 
                <Form.Group controlId="phone">                   
                    <Form.Control required onChange={(e) => setMobileNumber(e.target.value)} name='mobileNumber' type="text" value={mobileNumber} placeholder="Enter Mobile Number 03XXXXXXXXX" />
                </Form.Group>
                <Form.Group controlId="address">                   
                    <Form.Control required onChange={(e) => setAddress(e.target.value)} name='address' type="text" value={address} placeholder="Enter Address" />
                </Form.Group>
                <Form.Group controlId="city">                   
                    <Form.Control required onChange={(e) => setCity(e.target.value)} name='city' type="text" value={city} placeholder="Enter City" />
                </Form.Group>
                <Form.Group>
                    <Form.Label as="legend">
                        Payment Method
                    </Form.Label>
                    <Form.Check 
                    type='radio' 
                    label="Cash On Delivery" 
                    id="cod" 
                    name='cashondelivery'
                    value='cod'
                    defaultChecked                  
                    >
                    </Form.Check>
                </Form.Group>*/}
                {/* {error && <Message variant="danger">{error}</Message>} */}
                {/* {cartItems.length === 0 && "No Items in Cart"} */}
                {/* <Button 
                        className="btn-block"
                        onClick={placeOrderHandler}
                        disabled={cartItems.length === 0}
                        >
                         Place Order
                     </Button>
            </Form>  */}

            


                    </Col>
                    <Col md={6}>
                    <Card>
                        <h4 className="text-center py-2">Order Summary</h4>
                <ListGroup variant='flush'>
                <ListGroup.Item>
                    <h6>
                    Total ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) 
                    items
                    </h6>
                    <h6>Items Price Rs. {itemsPrice}</h6>
                    
                
              </ListGroup.Item>
              <ListGroup.Item>
                    <h6>
                    Including Shipping Charges Rs. {shippingPrice}                                
                    </h6>
              </ListGroup.Item>
              <ListGroup.Item>
                    <h5>
                    Total Charges Rs. {totalPrice}                  
                    </h5>                    
                
              </ListGroup.Item>
              <ListGroup.Item>                
                </ListGroup.Item>
                </ListGroup>
            </Card>
                    </Col>
                </Row>
            </Container>           
            
        </div>
    )
}

export default PlaceOrder
