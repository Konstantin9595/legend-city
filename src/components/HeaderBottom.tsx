import React from 'react'
import './HeaderBottom.css'
import Logo from '../../Logo'
import Navigation from '../../Navigation'

const HeaderBottom: React.FC = () => {

    return (
        <div>
            <div className="header__bottom-left">
                <Logo />
            </div>
            <div className="header__bottom-right">
                <Navigation />
            </div>
        </div>
    )
}


export default HeaderBottom