import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1 className='mt-5'>404</h1>
            <h3>The Page Not Found</h3>
            <button className="btn-custom ms-3">Go To Home</button>
            <button className="btn-custom-outline">Sign Up</button>
        </div>
    );
};

export default NotFound;