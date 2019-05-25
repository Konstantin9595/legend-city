import React from "react";
import '../styles/Card/Card.css'

interface IProps {
    content: {}
}

const Card: React.FC<IProps> = ({content}:any) => {

    const elements = content.services.map(( {id, name, description, important, avatar, bonuses:[from, to], category, date, rate }:any ) => {
        const percent = from&&to ? `${from}-${to}%`: `${from}%`

        return (
            <div className="card col-xl-4" key={id}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item card-title">
                        <h3>{ name }</h3>
                        <i className="fas fa-heart"></i>
                    </li>
                    <li className="list-group-item card-middle">
                        <div className="row">
                            <div className="icon col-xl-6">
                                Logo
                                <div className="rate">
                                    { rate }
                                </div>
                            </div>
                            <div className="description col-xl-6">
                                { description }
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item card-bottom">
                        { percent }
                    </li>
                </ul>
            </div>
        )
    })

    return (
        <div className="card">
            <div className="row">
                { elements }
            </div>
        </div>
    )
}


export default Card