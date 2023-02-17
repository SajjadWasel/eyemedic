import React, { useState } from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {

    const [shadow, setShadow] = useState('');
    const [NavColor, setNavColor] = useState('');
    const [navbarToggle, setNavbar] = useState(false);
    const changeBackground = () => {
        if (window.scrollY > 3) {
            setNavbar(true)
            setNavColor('light')
            setShadow('shadow')
        }
        else {
            setNavbar(false)
            setNavColor('none')
            setShadow('')

        }
    }

    window.addEventListener('scroll', changeBackground);


    return (
        <div>
            <Navbar bg={NavColor} className={`${shadow} navbar fixed-top`} variant="light">
                <Container>
                    <Navbar.Brand className='text-dark' href="#home">
                        <b><span>Eye</span>medic</b>
                    </Navbar.Brand>
                    <Nav className="ms-auto">

                            <Nav.Link className='text-secondary ms-4'>
                                <Link className='text-decoration-none text-secondary' to='/'>Home</Link>
                            </Nav.Link>
                            <Nav.Link className='text-secondary ms-4'>
                                <Link className='text-decoration-none text-secondary' to='/about'>About</Link>
                            </Nav.Link>
                            <Nav.Link className='text-secondary ms-4'>
                                <Link className='text-decoration-none text-secondary' to='/services'>Services</Link>
                            </Nav.Link>
                            <Nav.Link className='text-secondary ms-4'>
                                <Link className='text-decoration-none text-secondary' to='/pricing'>Pricing</Link>
                            </Nav.Link>
                            <Nav.Link className='text-secondary ms-4'>
                                <Link className='text-decoration-none text-secondary' to='/contact'>Contact</Link>
                            </Nav.Link>
                        
                        
                        <button className="btn-custom-outline ms-4">Login</button>
                        <button className="btn-custom ms-4">Sign Up</button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;