import React from 'react';
import './AppBar.scss'
import Navigation from '../Navigation'
import AuthNav from '../AuthNav';

const AppBar = () => (
    <header className='app-header'>
        <Navigation />
        <AuthNav />
    </header>
);

export default AppBar;