import React from 'react';
import '../styles/LeftSidebar/LeftSidebar.scss';
import UserCardInfoContainer from './UserCardInfoContainer'
import CategoryContainer from './CategoryContainer'

const LeftSidebar: React.FC = () => {
    return (
        <div className="left-sidebar col col-md-4">
            <UserCardInfoContainer />
            <CategoryContainer />
        </div>
    );
}

export default LeftSidebar;