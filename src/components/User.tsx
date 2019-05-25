import React, { Component } from 'react';
import '../styles/User/User.css';

interface IProps {
    user: {},
    getUserAction: Function
}

class User extends Component<IProps> {

    state = {
        userSettings: {
            links: ["Профиль", "Настройки", "Выход"]
        }
    }

    componentDidMount() {
        const { getUserAction } = this.props

        getUserAction(1)
    }

    render() {

        const {user:{user:{id, name, logo, currency, balance, permissions } } }:any = this.props
        const { userSettings:{ links } } = this.state
        console.log("links", links)
        return (
            <div className="user">
                <div className="user-balance">
                    UserBalance
                </div>
                <div className="user-profile">
                    <div className="dropdown">
                        <img src="../images/user/ava_30x30x2.png" alt="" className="dropdown__user-logo"/>
                        <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            { name }
                        </a>

                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default User;