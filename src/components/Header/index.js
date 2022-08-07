import React from 'react';
import Navigation from '../Navigation';

function Header({ setRoute, route }) {
    return (
        <header>
            <h1>Derricka's Portfolio</h1>
            <Navigation route={route} setRoute={setRoute} />
        </header>
    )
}

export default Header;