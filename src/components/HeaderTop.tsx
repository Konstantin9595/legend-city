import React from 'react'
import Support from './Support'
import UserContainer from './UserContainer'
import '../styles/Header/Header.scss'

const HeaderTop: React.FC = () => {

    return (
        <div className="header-top ">
            <div className="header-line container">
                <div className="row">
                    <div className="header__top-left col-xl-8">
                        <Support/>
                    </div>
                    <div className="header__top-right col-xl-4">
                        <UserContainer/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HeaderTop