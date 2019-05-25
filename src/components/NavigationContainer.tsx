import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navigation from './Navigation'
import { getNavigationAction } from "../store/actions";

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
        const {navigation, getNavigationAction}:any = this.props
        return (
            <Navigation navigation={navigation} getNavigationAction={getNavigationAction} />
        )
    }
}

const mapStateToProps = ({navigation}:any ):{} => {

    return {
        navigation:navigation
    }
}

const mapDispatchToProps = (dispatch: Function):{} => {
    return {
        getNavigationAction: () => dispatch(getNavigationAction())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);