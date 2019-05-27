import React, { Component } from 'react';
import '../styles/UserCardInfo/UserCardInfo.scss';
import cardIcon from '../images/side_car.svg'

interface IProps {
    user: {},
    getUserAction: Function
}

interface ITest {
    cardNumber: string
}

export default class UserCardInfo extends Component<IProps> {

    componentDidMount() {
        const { getUserAction } = this.props

        getUserAction(1)
    }

    render() {
        // const { cardNumber, name, surname} = this.props

        const { user:{user: {cardNumber, name, surname } } }: any = this.props


        //console.log("cardNumber", cardNumber)

        return (
            <div className="user__card-info">
                <div className="about-card">
                    Информация о карте
                </div>
                <div className="user-name">
                    { name } { surname }
                </div>
                <div className="card-number">
                    <div className="card__number-img">
                        <img src={cardIcon} />
                    </div>

                    <div className="card__number-code">
                        { cardNumber }
                    </div>
                </div>
            </div>
        );
    }
}

