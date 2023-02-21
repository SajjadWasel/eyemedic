import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [updateProfile, updating, error1] = useUpdateProfile(auth);


    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();



    const handleSignUp = async (event) => {
        
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const username = displayName?.current?.value;

        createUserWithEmailAndPassword(email, password)
        const successUpdate = await updateProfile({displayName: username})
        if(successUpdate){
            navigate('/')
        }
        else{
            alert(error1)
        }
    }



    return (
        <div>
            <Form onSubmit={handleSignUp} data-aos="flip-up" className='login container w-50 d-flex flex-column p-5 shadow mb-5'>
                <h1 className='text-center'>
                    <span className="text_orangered_span">Sign Up</span>
                </h1>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control ref={nameRef} className='rounded-pill' size="lg" type="name" placeholder="Enter Name" />
                    <Form.Text className="text-muted">
                        We'll never share your data with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} className='rounded-pill' size="lg" type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} className='rounded-pill' size="lg" type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree to Eyemedic Term & Services" />
                </Form.Group>
                <button
                    className='btn-custom rounded-pill px-5' type="submit">
                    Submit
                </button>
                <p className='text-center mt-4'>Already have an account? <Link to='/login' className='text-decoration-none'>Login here</Link></p>
            </Form>
        </div>
    );
};

export default SignUp;