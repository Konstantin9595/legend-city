import React from 'react';
import '../styles/LeftSidebar/LeftSidebar.scss';
import UserCardInfoContainer from './UserCardInfoContainer'
import CategoryContainer from './CategoryContainer'

const LeftSidebar: React.FC = () => {
    return (
        <div className="left-sidebar">
            <UserCardInfoContainer />
            <CategoryContainer />
        </div>
    );
}

export default LeftSidebar;