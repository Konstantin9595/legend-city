import React from 'react';
import '../styles/Logo/Logo.scss';
import logo from '../images/logo.svg'

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <img src={logo} alt="Логотип"/>
        </div>
    );
}

export default Logo;