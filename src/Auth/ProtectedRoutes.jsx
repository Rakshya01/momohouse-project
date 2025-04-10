import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes({components}) {

    const { user, isAuthenticated} = useAuth0();

    const navigate = useNavigate()

    if(!isAuthenticated) {
        return navigate("/login")
    }

  return components;
}

export default ProtectedRoutes
