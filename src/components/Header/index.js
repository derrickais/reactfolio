import React from 'react';
import Navigation from '../Navigation';

function Header({ setRoute }) {
    return (
        <header>
            <img src="#" />
            <Navigation setRoute={setRoute} />
        </header>
    )
}

export default Header;