import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="bg-primary mt-5">
            <Container className="py-3">
                <Row>
                    <Col sm={12} md={4} >
                        <Image src="/images/logo-ht.png" fluid />                 
                    </Col>
                    <Col sm={12} md={4} >
                        <p className="text-white">Hashtag Store PK is one of the reliable Store in Pakistan, Our top priority is to provide best customer services to our customer along with the products.</p>                 
                    </Col>
                    <Col sm={12} md={4} >
                        <h2 className="text-center">For Order: 0340 - 8323906</h2>                 
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row className="bg-light py-2">
                    <Col sm={12}>
                        <h5 className="text-center text-dark">Copyrights 2021 - Hashtag Store PK</h5>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
