import React, {Component} from 'react';
import Card from './Card'
import Banner from './Banner'
import ContentBar from './ContentBar'
import '../styles/Content/Content.scss'

interface IProps {
    getContentAction?: Function,
    updateContentAction: Function,
    sortAction: Function,
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

    handlerSorting = (name: any) => {


        this.setState({favoritesState: name})
    }


    render() {

        const {content, updateContentAction, sortAction} = this.props
        //const {favoritesState} = this.state

        return (
            <div className="container-fluid col-md-8">
                <div className="row">
                    <Banner/>
                    <ContentBar sortAction={sortAction} handlerSorting={this.handlerSorting}/>
                    <Card updateContentAction={updateContentAction} content={content}/>
                </div>
            </div>
        );
    }
}


export default Content;