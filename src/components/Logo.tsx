import React from 'react';
import '../styles/Logo/Logo.scss';
import logo from '../images/logo.svg'

const Logo: React.FC = () => {
    return (
        <div className="logo">
            <a href="#">
                <img src={logo} alt="Логотип"/>
            </a>
        </div>
    );
}

export default Logo;