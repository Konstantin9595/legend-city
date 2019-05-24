import React from 'react';
import '../../styles/Navigation/Navigation.css';

const Navigation: React.FC = () => {
    const navigation = {
        list: [
            {id: 0, label: "Заведения", "link": "#"},
            {id: 1, label: "Кэшбэк", "link": "#"}
        ]
    }

    const elements = navigation.list.map(({id, link, label}) => {
        return (
            <li key={id}>
                <a href={ link }>{ label }</a>
            </li>
        )
    })

    return (
        <ul className="navigation list-group">
            { elements }
        </ul>
    );
}

export default Navigation;