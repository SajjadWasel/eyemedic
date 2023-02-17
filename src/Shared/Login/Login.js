import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';

const Login = () => {
    return (
        <Form data-aos="flip-up" className='login container w-50 d-flex flex-column p-5 shadow mb-5'>
            <h1 className='text-center'>
                <span className="text_orangered_span">Login</span>
            </h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control className='rounded-pill' size="lg" type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control className='rounded-pill' size="lg" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <button className='btn-custom rounded-pill px-5' type="submit">
                Submit
            </button>
            
        </Form>
    );
};

export default Login;