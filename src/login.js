import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () =>{
    const { loginWithRedirect } = useAuth0();

    return <button className='my-button' onClick={ ()=>loginWithRedirect()} >Login</button>
} 

export default LoginButton;