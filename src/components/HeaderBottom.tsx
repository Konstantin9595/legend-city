import React from 'react'
import Logo from './Logo'
import NavigationContainer from './NavigationContainer'
import '../styles/HeaderBottom/HeaderBottom.scss'

const HeaderBottom: React.FC = () => {

    return (
        <div className="header__bottom-container">
            <div className="container">
                <div className="row">
                    <div className="header__bottom-left col-12 col-md-9">
                        <Logo />
                    </div>
                    <div className="header__bottom-right col-12 col-md-3">
                        <NavigationContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeaderBottom