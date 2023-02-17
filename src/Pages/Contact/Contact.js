import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="page_header">
                <h1 className='text-center text-white'>Contact Us</h1>
            </div>

            <div className='contact container mt-5'>
                <Form className='contact-form w-50 mx-auto p-5 m-5'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <button type='submit' className='btn-custom'>Submit</button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;