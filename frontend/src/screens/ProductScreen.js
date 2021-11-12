import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { listProductDetails } from '../store/actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, ListGroup, Card, Button, Form} from 'react-bootstrap'
import Rating from '../components/Rating'
import Message from '../components/Message'
import Loader from '../components/Loader'


const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const { loading, product, error} = productDetails
    
    useEffect(() => {
        dispatch(listProductDetails(match.params.id))

    }, [dispatch, match])


    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }


    return (
        <div>
            <Link to='/' className="btn btn-primary my-3">Go Back</Link>
           {loading ? ( <Loader />)
            : error ? <Message variant='danger'>{error}</Message>   
            : (
                <Row>
                <Col sm={12} md={5}>
                    <Image src={product.image} alt={product.name} fluid />                  
                </Col>
                <Col sm={12} md={4}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h4 >{product.name}</h4>
                        </ListGroup.Item>
                        <ListGroup.Item>
                           <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <h5>Price: Rs. {product.price}</h5>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col sm={12} md={3}>
                        <Card>
                            <ListGroup>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Price:
                                        </Col>
                                        <Col>
                                           <strong>Rs. {product.price}</strong>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Status:
                                        </Col>
                                        <Col>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col>
                                            <Form.Control 
                                            as="select"
                                            value={qty}
                                            onChange={(e) => setQty(e.target.value)}
                                            >
                                                {[...Array(product.countInStock).keys()].map((x) => {
                                                     return (
                                                        <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                        </option>
                                                     )
                                                })

                                                }                                       
                                            </Form.Control>                                            

                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}


                                <ListGroup.Item>
                                    <Button 
                                    onClick={addToCartHandler}
                                    className='btn-block' 
                                    type='button' 
                                    disabled={product.countInStock === 0}
                                    >Add to card</Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                </Col>
                </Row>

            )
            }
           
           
            
        </div>
    )
}

export default ProductScreen
