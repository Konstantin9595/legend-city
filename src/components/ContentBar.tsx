import React from 'react';
import '../styles/ContentBar/ContentBar.scss';

const ContentBar: React.FC = () => {
    return (
        <div className="content_bar container-fluid">
            <div className="content_bar__title">
                <h2>Заведения</h2>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Library</li>
                    </ol>
                </nav>
            </div>
            <div className="content_bar__sorting">
                Сортировка:
                <select>
                    <option>Все</option>
                    <option>Избраные</option>
                </select>
            </div>
        </div>
    );
}

export default ContentBar;