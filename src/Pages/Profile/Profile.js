import { getAuth } from 'firebase/auth';
import React, { useRef } from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState, useUpdateEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './Profile.css';

const Profile = () => {

    const [user, loading, error] = useAuthState(auth);
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const [updateEmail, updating2, error2] = useUpdateEmail(auth);



    const usernameRef = useRef();
    const displayName = usernameRef?.current?.value;

    const emailRef = useRef();
    const email = emailRef?.current?.value;


    console.log(user)

    const updateUsername = async (event) => {
        event?.preventDefault();
        await updateProfile({ displayName });

    }

    const updateEmailAdress = async (event) => {
        event?.preventDefault();
        const success = await updateEmail(email);
        if (success) {
            alert('Updated email address');
        }
    }


    return (
        <div className='profile'>
            <h1 className='heading text-center mt-5'><span className="text_orangered_span" data-aos="zoom-in">Your Profile</span></h1>

            <div className='container w-25'>

                <div className='mt-5'>
                    <label>Username:</label>
                    <input ref={usernameRef} type="text" className="form-control p-3" id="username" placeholder={user?.displayName ? user?.displayName : 'Enter Username'}></input>
                    <button
                        onClick={() => updateUsername()}
                        className="btn-profile mt-3 btn-custom">Update Username</button>
                </div>
                <br />
                <div className='mt-5'>
                    <label>Email:</label>
                    <input ref={emailRef} type="email" className="form-control p-3" id="email" placeholder={user?.displayName ? user?.email : 'Enter Email'}></input>
                    <button
                        onClick={() => updateEmailAdress()}
                        className="btn-profile mt-3 btn-custom">Update Email</button>
                </div>

            </div>

        </div>
    );
};

export default Profile;