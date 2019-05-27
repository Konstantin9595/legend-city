import React, { Component } from 'react';
import '../styles/Navigation/Navigation.css';

interface IProps {
    navigation: {},
    getNavigationAction?: Function
}

class Navigation extends Component<IProps> {

    state = {
        linkActive: 0
    }

    onClick = (e:any) => {
        // В он клике будет известен id кликнутой ссылки isActive
        const currentLink = parseInt(e.target.getAttribute("data-active"))
        this.setState({linkActive: currentLink})
    }

    componentDidMount() {
        const { getNavigationAction }:any = this.props
        getNavigationAction()
    }

    render() {
        const { navigation:{navigation} }:any = this.props

        const elements = navigation.map(({id, link, label}:any) => {
            const className = this.state.linkActive === id ? "navActive" : ""
            return (
                <li key={id}>
                    <a className={className} href={ link } onClick={this.onClick} data-active={id}>{ label }</a>
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