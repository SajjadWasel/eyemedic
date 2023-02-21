import React from 'react';
import { Form } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <div>
            <div className="page_header">
                <h1 className='text-center text-white'>Contact Us</h1>
            </div>

            <div className='d-flex align-items-center justify-content-between contact container mt-5'>
                <div className='contact-text p-3'>
                    <h1 className='heading'><span className="text_orangered_span" data-aos="zoom-in">Our Services</span></h1>
                    <div className="container">
                    <h5 className='my-5'>Phone: 01234567891</h5>
                    <h5 className='my-5'>Address: 3 No. Road, Mirpur DOHS, Dhaka</h5>
                    <h5 className='my-5'>Email: someone@gmail.com</h5>
                    </div>
                </div>
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