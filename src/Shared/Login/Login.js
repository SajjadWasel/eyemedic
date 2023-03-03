import React, { useRef } from 'react';
import { ToastContainer, toast, Flip } from 'react-toastify';
import { Form } from 'react-bootstrap';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const Login = () => {

    const [user3, loading3, error3] = useAuthState(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);


    const emailRef = useRef('');
    const passwordRef = useRef('');

    let error_message = error?.message;
    let loading_message = loading?.message;

    const notify = () => toast.error(error_message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    const notifyLoading = () => toast.loading(loading_message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });

    if (error) {
        notify();
    }

    const handleSignIn = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }




    return (
        <div>

            <Form onSubmit={handleSignIn} data-aos="flip-up" className='login container w-50 d-flex flex-column p-5 shadow mb-5'>
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



                {/* ============================ */}
                <p>{error ? error.message : ''}</p>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Flip}
                />
                





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