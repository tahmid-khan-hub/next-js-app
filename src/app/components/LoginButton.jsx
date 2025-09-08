"use client"
import React from 'react';
import signIn from "next-auth/react"

const LoginButton = () => {
    return (
        <div>
            <button className='p-3 bg-green-600 mt-5 rounded-xl' onClick={() => signIn()}>Login</button>
        </div>
    );
};

export default LoginButton;