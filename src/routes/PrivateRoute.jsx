import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import './PrivateRoute.css'

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading)  {
        return (
            <div className='spinner-container'>
                <div className="spinner"></div>
            </div>
        )
    }
    else if(user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace />;
};

export default PrivateRoute;