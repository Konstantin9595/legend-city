import React, { Component } from 'react'
import '../styles/ContentBar/ContentBar.scss'
import {SORT_CONTENT_ACTION} from "../store/actions"

interface IProps {
    handlerSorting: Function,
    sortAction: Function
}

export default class ContentBar extends Component<IProps> {

    state = {
        options: ["all"]
    }

    handleChange = (event:any) => {
        const currentValue = event.target.value
        this.setState({
            options: [currentValue]
        })
    }

    componentDidUpdate(prevProps:{}, prevState:{}) {
        const { options: prevOptions }:any = prevState
        const { options: currentOptions }:any = this.state

        if(prevOptions[0] !== currentOptions[0]) {
            const { handlerSorting, sortAction } = this.props

            sortAction({
                actionType: SORT_CONTENT_ACTION,
                actionValue: {options: this.state.options}
            })
        }
    }

    render() {
        return (
            <div className="content_bar container-fluid">
                <div className="content_bar__title">
                    <h2>Заведения</h2>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Library</li>
                        </ol>
                    </nav>
                </div>
                <div className="content_bar__sorting">
                    Сортировка:
                    <select onChange={this.handleChange}>
                        <option value="all">Все</option>
                        <option value="favorites" >Избраные</option>
                    </select>
                </div>
            </div>
        );
    }
}