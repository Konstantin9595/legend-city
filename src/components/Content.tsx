import React, {Component} from 'react';
import Card from './Card'
import Banner from './Banner'
import ContentBar from './ContentBar'
import '../styles/Content/Content.scss'

interface IProps {
    getContentAction?: Function,
    updateContentAction: Function,
    content: {}
}

class Content extends Component<IProps> {

    state = {
        favoritesState: null
    }

    componentDidMount() {
        const {getContentAction}:any = this.props

        // action for fetch data from remote api
        getContentAction()
    }

    handlerProps = (name:any) => {
        this.setState({favoritesState: name})
    }


    render() {


        const {content, updateContentAction} = this.props
        return (
            <div className="content container-fluid">
                <Banner />
                <ContentBar handlerProps={this.handlerProps}/>
                <Card updateContentAction={updateContentAction} content={content} favoritesState={this.state.favoritesState}/>
            </div>
        );
    }
}


export default Content;