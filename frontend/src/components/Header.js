import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {Navbar, Container, Nav, Image} from 'react-bootstrap'


const Header = () => {
    return (
        <header>
            <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand ><Image src="/images/logo-ht.png" fluid /></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <LinkContainer to='/cart'>
                        <Nav.Link ><i className='fas fa-shopping-cart'></i> Cart</Nav.Link>
                    </LinkContainer>  
                    </Nav>               
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header