import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from './User'
import { getUserAction } from '../store/actions'

// Компонент UserContainer получает данные навигации на сайте и отображает их в компоненте User
    // Actions:
        // GET_USER
        // GET_USER_SUCCESS
        // GET_USER_FAIL
    // ActionCreators:
        // getUserAction()
            // - Информирует о действие и производит запрос. После чего отдает результат. Успешно или неуспешно
    // getUserReducers()
            // - Проверяет успех или неуспех экшена getUserAction после чего отдает новое состояние или дефолтное.


class UserContainer extends Component {

    render() {
        const { user, getUserAction }:any = this.props

        return (
            <User user={user} getUserAction={getUserAction} />
        )
    }
}

const mapStateToProps = ({user}:any):{} => {
    return {
        user
    }
}
const mapDispatchToProps = (dispatch:Function):{} => {
    return {
        getUserAction: (id:number) => dispatch(getUserAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);