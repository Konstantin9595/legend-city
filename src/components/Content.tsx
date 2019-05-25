import React, { Component } from 'react';
import Card from './Card'

interface IProps {
    getContentAction?: Function,
    content: {}
}

class Content extends Component<IProps> {

    componentDidMount() {
        const { getContentAction }:any = this.props

        // action for fetch data from remote api
        getContentAction()
    }
    render() {


        const { content } = this.props

        return (
            <div className="content">
                <div className="row">
                    <Card content={content}/>
                </div>
            </div>
        );
    }
}


export default Content;