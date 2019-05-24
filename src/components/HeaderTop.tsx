import React from 'react'
import "./HeaderTop.css"
import User from '../../User'
import Support from '../../Support'

const HeaderTop: React.FC = () => {

    return (
        <div className="header__top-container">
            <div className="header__top-left">
                <Support />
            </div>
            <div className="header__top-right">
                <User />
            </div>
        </div>
    )
}


export default HeaderTop