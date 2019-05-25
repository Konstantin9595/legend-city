import React, { Component } from 'react';
import '../styles/Navigation/Navigation.css';

interface IProps {
    navigation: {},
    getNavigationAction?: Function
}

class Navigation extends Component<IProps> {

    componentDidMount() {
        const { getNavigationAction }:any = this.props
        getNavigationAction()
    }

    render() {
        const { navigation:{navigation} }:any = this.props

        const elements = navigation.map(({id, link, label}:any) => {
            return (
                <li key={id}>
                    <a href={ link }>{ label }</a>
                </li>
            )
        })

        return (
            <ul className="navigation list-group">
                { elements }
            </ul>
        )
    }
}

export default Navigation;