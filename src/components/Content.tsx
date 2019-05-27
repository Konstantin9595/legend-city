import React, {Component} from 'react';
import Card from './Card'
import Banner from './Banner'
import ContentBar from './ContentBar'
import '../styles/Content/Content.scss'

interface IProps {
    getContentAction?: Function,
    content: {}
}

class Content extends Component<IProps> {

    componentDidMount() {
        const {getContentAction}:any = this.props

        // action for fetch data from remote api
        getContentAction()
    }

    render() {


        const {content} = this.props

        return (
            <div className="content container-fluid">
                <Banner />
                <ContentBar />
                <Card content={content}/>
            </div>
        );
    }
}


export default Content;