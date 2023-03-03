import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';

const PrivateRoute = ({ children }) => {

    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return (
            <div style={{'height': '50vh'}} className='mt-5 d-flex justify-content-center align-items-center'>
                <Spinner animation="grow" variant="dark" />
            </div>);
    }

    if (user) {
        return children;
    }
    
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;