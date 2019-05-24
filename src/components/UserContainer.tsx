import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navigation from './Navigation'

// Компонент NavigationContainer получает данные навигации на сайте и отображает их в компоненте Navigation
    // Actions:
        // GET_NAVIGATION
        // GET_NAVIGATION_SUCCESS
        // GET_NAVIGATION_FAIL
    // ActionCreators:
        // getNavigationAction()
            // - Информирует о действие и производит запрос. После чего отдает результат. Успешно или неуспешно
    // getNavigationReducers()
            // - Проверяет успех или неуспех экшена getNavigationAction после чего отдает новое состояние или дефолтное.


class NavigationContainer extends Component {

    render() {
        return (
            <Navigation />
        )
    }
}

const mapStateToProps = () => {}
const mapDispatchToProps = () => {}


export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);