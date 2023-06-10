import React from 'react';
import {Outlet, Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const PrivateRoutes = () => {
    const {user} = useAuth();
    const location = useLocation();

    return (
        user.email ? <Outlet/> : <Navigate to='/login' replace state={{ from: location }} />
    );
};

export default PrivateRoutes;