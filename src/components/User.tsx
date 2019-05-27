import React, { Component } from 'react';
import '../styles/User/User.scss';
import userLogo from '../images/user/ava_30x30x2.png'

interface IProps {
    user: {},
    getUserAction: Function
}

class User extends Component<IProps> {

    state = {
        userSettings: {
            links: [
                    {"id":0, "link": "Профиль"},
                    {"id":1, "link": "Настройки"},
                    {"id":2, "link": "Выход"}
                ]
        }
    }

    componentDidMount() {
        const { getUserAction } = this.props

        getUserAction(1)
    }

    render() {

        const {user:{user:{id, name, currency, balance } } }:any = this.props
        const { userSettings:{ links } } = this.state

        const dropDownMenu = links.map(({id, link}) => <a key={id} className="dropdown-item" href="#">{ link }</a>)
        const balanceFormat = new Intl.NumberFormat().format(balance)

        return (
            <div className="user">
                <div className="user-balance">
                    <div className="sum">
                        <span className="icon-sum"></span>
                        <span className="sum-number">{ balanceFormat }</span>
                        <span>₽</span>
                    </div>
                    <div className="withdraw">
                        <button type="button" className="btn btn-outline-success">Вывести</button>
                    </div>
                </div>
                <div className="user-profile">
                    <div className="dropdown">
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={userLogo} className="dropdown__user-logo"/>
                            {name}
                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            { dropDownMenu }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default User;