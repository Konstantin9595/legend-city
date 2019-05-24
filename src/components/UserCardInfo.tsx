import React from 'react';
import './User.css';

const UserCardInfo: React.FC = () => {
    return (
        <div className="user__card-info">
            <div className="about-card">
                Информация о карте
            </div>
            <div className="user-name">
                Артем Райм
            </div>
            <div className="card-number">
                <img src="../../../images/side_car.svg" alt="" className="card-icon"/>
            </div>
        </div>
    );
}

export default UserCardInfo;