import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Container, Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import { listProducts } from '../store/actions/productActions'
import HsCarousel from '../components/HsCarousel'

const HomeScreen = () => {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList )
    const { loading, products } = productList

    useEffect( () => {
       dispatch(listProducts())       

    },[])



    return (
        <div>
            <HsCarousel indicators={false} />
            <Container>
            <h1 className="text-center display-4 text-uppercase">Hot Selling Items</h1>
                {loading ? (<Loader />) : 
                (   <Row>
                    {products.map((product) => {
                        return  ( <Col key={product._id} sm={12} md={4} lg={4} xl={4}>
                              <Product product={product} />
                          </Col>)
                          
                      })
                      }
                      </Row>
                )                
                }
           </Container>
        </div>
    )
}

export default HomeScreen
