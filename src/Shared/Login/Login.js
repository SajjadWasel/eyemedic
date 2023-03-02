import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Login.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const Login = () => {


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const navigate = useNavigate();

    const handleSignUp = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }

    return (
        <div>

            <Form onSubmit={handleSignUp} data-aos="flip-up" className='login container w-50 d-flex flex-column p-5 shadow mb-5'>
                <h1 className='text-center'>
                    <span className="text_orangered_span">Login</span>
                </h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} className='rounded-pill' size="lg" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} className='rounded-pill' size="lg" type="password" placeholder="Password" />
                </Form.Group>

                <button className='btn-custom rounded-pill px-5' type="submit">
                    Submit
                </button>
                <p className='mt-4 text-center'>Don't have an account? <Link to='/signup' className='text-decoration-none'>Signup here</Link></p>
            </Form>

            <div className='text-center social-sign-in mb-5'>
                <button onClick={() => signInWithGoogle()} className="btn btn-light mt-3">
                    <FcGoogle className='me-2 '></FcGoogle> Sign In With Google
                </button><br />
                <button className="btn btn-light mt-3">
                    <FaFacebook className='me-2 text-primary'></FaFacebook>Sign In With Google
                </button><br />

            </div>

        </div>
    );
};

export default Login;