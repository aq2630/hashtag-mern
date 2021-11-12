import React from 'react'
import {Link} from 'react-router-dom'
import { Card } from 'react-bootstrap'
import Rating from '../components/Rating'

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
        <Link to={`/product/${product._id}`} >
            <Card.Img src={product.image} variant='top' />
        </Link>
        <Card.Body>
            <Link className='text-decoration-none product-title' to={`/product/${product._id}`} >
                <Card.Title as='div' className='text-warning'>
                    <strong>{product.name}</strong>
                </Card.Title>
            </Link>
            <Card.Text as="div">
               <Rating
                value={product.rating}
                text={`${product.numReviews} Reviews`}                    
                />
            </Card.Text>
            <Card.Text as="h3">
               Rs. {product.price}
            </Card.Text>

        </Card.Body>
        
    </Card>
    )
}

export default Product
