import React from 'react';

const Navbar = () => {
    const links = <>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
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