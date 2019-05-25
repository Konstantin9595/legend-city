import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'

const Header: React.FC = () => {

    return (
        <header className="header">
            <HeaderTop />
            <HeaderBottom />
        </header>
    )
}


export default Header