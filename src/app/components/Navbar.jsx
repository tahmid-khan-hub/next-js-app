import React from 'react';

const Navbar = () => {
    const links = <>
        <li>Home</li>
        <li>Services</li>
        <li>About</li>
    </>
    return (
        <div>
            <ul>
                {links}
            </ul>
        </div>
    );
};

export default Navbar;