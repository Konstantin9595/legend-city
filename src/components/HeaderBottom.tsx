import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import '../styles/Header/Header.css'

const HeaderBottom: React.FC = () => {

    return (
        <div className="header__bottom-container">
            <div className="header__bottom-left">
                <Logo />
            </div>
            <div className="header__bottom-right">
            </div>
        </div>
    )
}


export default HeaderBottom