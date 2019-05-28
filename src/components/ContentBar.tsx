import React, { Component } from 'react';
import '../styles/ContentBar/ContentBar.scss';

interface IProps {
    handlerProps: Function
}

export default class ContentBar extends Component<IProps> {

    state = {
        value: "all"
    }

    prepareQueryString = ({value}:{value: {}}) => {
        switch (value) {
            case "favorites":
                console.log("prepareQueryString = ", "favorites")
                return true
            default:
                console.log("prepareQueryString = ", "all = ", value)
                return false
        }
    }

    handleChange = (event:any) => {
        this.setState({value: event.target.value})
    }

    componentDidUpdate(prevProps:any, prevState:any) {
        if(prevState.value !== this.state.value) {
            const { handlerProps } = this.props
            handlerProps(this.prepareQueryString(this.state))
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
                    <select value={this.state.value}  onChange={this.handleChange}>
                        <option value="all">Все</option>
                        <option value="favorites" >Избраные</option>
                    </select>
                </div>
            </div>
        );
    }
}