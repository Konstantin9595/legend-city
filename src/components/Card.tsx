import React from "react";
import '../styles/Card/Card.scss'
import productLogo from '../images/shop_avatar_70x70x2.png'

interface IProps {
    content: {}
}

const Card: React.FC<IProps> = ({content}:any) => {

    const elements = content.services.map(( {id, name, description, important, avatar, bonuses:[from, to], category, date, rate }:any ) => {
        const percent = from&&to ? `${from}-${to}%`: `${from}%`

        return (
            <div className="card-list col-xl-4" key={id}>
                <a href="#" className="card-item">
                    <div className="card-title">
                        <h3>{ name }</h3>
                        <button className="like">
                            <i className="fas fa-heart"></i>
                        </button>
                    </div>
                    <div className="card-middle">
                        <div className="icon">
                            <div className="card__icon-logo">
                                <img src={productLogo} alt=""/>
                            </div>
                            <span className="rate">
                                { rate }
                            </span>
                        </div>
                        <div className="description">
                            <span className="description-text">
                                { description }
                            </span>
                        </div>
                    </div>
                    <div className="card-bottom">
                        { percent }
                    </div>
                </a>
            </div>
        )
    })

    return (
        <div className="card-wrapper container-fluid">
            <div className="row">
                { elements }
            </div>
        </div>
    )
}


export default Card