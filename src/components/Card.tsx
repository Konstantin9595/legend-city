import React, { Component } from "react";
import '../styles/Card/Card.scss'
import productLogo from '../images/shop_avatar_70x70x2.png'

interface IProps {
    content: {},
    updateContentAction: Function
}

class Card extends Component<IProps> {

    state = {
        currentClickFavorite: {dataIndex: null, dataFavorites: null}
    }

    linkOnClick = (e:any) => {
        e.preventDefault()
    }

    changeFavorites = (event:{}):void => {
        const { target }:any = event

        const dataIndex:number = parseInt(target.getAttribute("data-index"))
        const dataFavorites:boolean = JSON.parse(target.getAttribute("data-favorites"))

        this.setState({currentClickFavorite: {dataIndex, dataFavorites: dataFavorites }})
    }

    componentDidUpdate(prevProps:any, prevState:any) {

        const { currentClickFavorite: {dataIndex: currentIndex, dataFavorites: currentFavorite} } = this.state
        const { currentClickFavorite: {dataIndex: prevIndex, dataFavorites: prevFavorite} } = prevState
        const { updateContentAction } = this.props

        if (currentIndex !== prevIndex || (currentIndex === prevIndex && currentFavorite !== prevFavorite) ) {
            updateContentAction(currentIndex, currentFavorite)
        }

    }


    render() {
        const { content }:any = this.props

        const elements = content.services.map(( {id, name, description, favorites, avatar, bonuses:[from, to], category, date, rate }:any ) => {
            const percent = from&&to ? `${from}-${to}%`: `${from}%`
            const likeClass = `like${favorites ? ' like-active' : ''}`

            return (
                <div className="card-list col-xl-4" key={id}>
                    <a href="#" className="card-item" onClick={this.linkOnClick}>
                        <div className="card-title">
                            <h3>{ name }</h3>
                            <button className={likeClass} data-index={id} data-favorites={favorites} onClick={this.changeFavorites}>
                                <i className="fas fa-heart" data-index={id} data-favorites={favorites}>
                                </i>
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
}

// const Card: React.FC<IProps> = ({content}:any) => {
//
//     // 1. Добавление в favorites
//         // - GET Запрос на получение данных по идентификатору на http://localhost:3001/services/{id}
//         // - PUT Запрос на изменение данных по идентификатору в http://localhost:3001/services/{id}
//     // 2. Удаление данных из favorites
//         // - PUT Запрос на изменение данных по идентификатору в http://localhost:3001/favorites/{id}
//
//     // Список задач:
//         // При клике на Like узнаем предидушее состояние если favorites был true то делаем PUT запрос на изменение favorites = false
//         // Если был false то делаем PUT запрос на изменение favorites = true
//
//     // {"id": 5, "name": "Фасоль","avatar": "","description": "Супермаркет","rate": 4.3,"bonuses": [3, 10],"date": "2019-05-18T11:52:12.732Z","important": false}
//
//
//
// }


export default Card