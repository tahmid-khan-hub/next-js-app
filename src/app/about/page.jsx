"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const AboutPage = () => {
    const router = useRouter();
    const handleRouting = () =>{
        const flag = false;
        if(flag){
            router.push("/about/contact");
        }else{
            router.push("/");
        }
    }
    return (
        <div>
            <h1>about page</h1>
            <button onClick={handleRouting} className='border bg-green-600 p-3 rounded-xl mt-5'>Contact</button>
        </div>
    );
};

export default AboutPage;