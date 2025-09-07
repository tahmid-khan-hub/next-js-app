"use client"
import { useSession } from 'next-auth/react';
import React from 'react';

const UserInfo = () => {
    const session = useSession();
    return (
        <div>
            
        </div>
    );
};

export default UserInfo;