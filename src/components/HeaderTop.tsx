import React from 'react'
import Support from './Support'
import User from './User'
import '../styles/Header/Header.css'

const HeaderTop: React.FC = () => {

    return (
        <div className="header__top-container">
            <div className="header__top-left">
                <Support />
            </div>
            <div className="header__top-right">
                {/*<User />*/}
            </div>
        </div>
    )
}


export default HeaderTop