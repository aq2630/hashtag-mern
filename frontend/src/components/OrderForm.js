import React from 'react'
import { Form, Container,  Row, Col, Button, Card} from 'react-bootstrap'






const OrderForm = (props) => {

    return (
        <div>
            <h3 className="text-center">Please Fill the Order Form</h3>
           <Form>
                <Form.Group controlId="email">                    
                    <Form.Control required type="email" placeholder="Enter Email" />
                </Form.Group>            
                <Form.Group controlId="fullname">                   
                    <Form.Control required type="text" placeholder="Enter Email" />
                </Form.Group>
                <Form.Group controlId="phone">                   
                    <Form.Control required type="number" placeholder="Enter Mobile Number 03XXXXXXXXX" />
                </Form.Group>
                <Form.Group controlId="address">                   
                    <Form.Control required type="text" placeholder="Enter Address" />
                </Form.Group>
                <Form.Group controlId="city">                   
                    <Form.Control required type="text" placeholder="Enter City" />
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
                    checked                  
                    >
                    </Form.Check>
                </Form.Group>
                <Button className="btn-block">
                    Place Order
                </Button>
            </Form>

            
        </div>
    )
}

export default OrderForm
