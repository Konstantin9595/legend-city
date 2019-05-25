import React from 'react';
import '../styles/Support/Support.css';
import SupportNumber from './SupportNumber'

const Support: React.FC = () => {
    return (
        <div className="support">
            <div className="support-text">
                Служба техподдержки:
            </div>
            <div className="number">
                <SupportNumber />
            </div>
        </div>
    );
}

export default Support;