
import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Form, Button, Image} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { createOrder } from '../store/actions/orderActions'

const ProductCheckOut = ({history}) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [fullName, setFullName] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [itemsPrice, setItemsPrice] = useState(2200)
    const [productName, setProductName ] = useState("Laptop Table")

    const orderCreate = useSelector(state => state.orderCreate)
    const { order, success, error } = orderCreate


    useEffect(() => {
        if(success && email) {
            history.push(`/orders/${order._id}`)
    
            // eslint-disable-next-line
        }
        },[success,history]) 

    const placeOrderHandler = () => {
        dispatch(createOrder({
            productName:productName,
            shippingDetails:{
                fullName,
                email,
                mobileNumber,
                address,
                city
            },
            itemsPrice
        }))
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col md={4} sm={12}>
                    <Form>                          
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
                </Form.Group>
                <Button 
                className="btn-block"
                onClick={placeOrderHandler}                
                >
                    Place Order
                </Button>
               
                
            </Form>   
                        
                    </Col>
                    <Col md={5} sm={12}>
                     <Image src='/images/laptop-table.jpg' alt={productName} fluid />
                     <h3></h3>  
                    </Col>
                    <Col md={3} sm={12}>
                     <h3>Wooden Laptop Table</h3>  
                     <h5>Price Rs. {itemsPrice}</h5>
                     <p>Best quality Wooden table, great for work from home users.</p>   
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default ProductCheckOut
