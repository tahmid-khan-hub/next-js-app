import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const links = <>
        <Link href="/about"><li>About</li></Link>
        <Link href="/"><li>Home</li></Link>
        <Link href="/services"><li>Services</li></Link>
    </>
    return (
        <div>
            <ul className='flex justify-between gap-5 p-2'>
                {links}
            </ul>
        </div>
    );
};

export default Navbar;