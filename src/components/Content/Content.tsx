import React from 'react';
import './Content.css';

const Content: React.FC = () => {

    return (
        <div className="content">
            <div className="row">
                <div className="card col-xl-4">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item card-title">
                            <h3>Title</h3>
                            <i className="fas fa-heart"></i>
                        </li>
                        <li className="list-group-item card-middle">
                            Card Center
                        </li>
                        <li className="list-group-item card-bottom">
                            Card Bottom
                        </li>

                    </ul>
                </div>
                <div className="card col-xl-4">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item card-title">
                            <h3>Title</h3>
                        </li>
                        <li className="list-group-item card-middle">
                            Card Center
                        </li>
                        <li className="list-group-item card-bottom">
                            Card Bottom
                        </li>

                    </ul>
                </div>
                <div className="card col-xl-4">
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item card-title">
                            <h3>Title</h3>
                        </li>
                        <li className="list-group-item card-middle">
                            Card Center
                        </li>
                        <li className="list-group-item card-bottom">
                            Card Bottom
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Content;