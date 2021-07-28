import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss'

const Navigation = () => (
    <nav>
        <NavLink to="/"
            exact
            className='nav-link'
            activeClassName='nav-link__active'>
            Main
        </NavLink>

        <NavLink
            to="/contacts"
            exact
            className='nav-link'
            activeClassName='nav-link__active'>
            Contacts
        </NavLink>
    </nav>
);

export default Navigation;