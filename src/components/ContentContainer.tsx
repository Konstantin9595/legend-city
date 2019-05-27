import React, { Component } from 'react'
import { connect } from 'react-redux'
import Content from './Content'
import { getContentAction, updateContentAction } from '../store/actions'



class ContentContainer extends Component{

    render() {
        const {getContentAction, updateContentAction, content }:any = this.props

        return (
            <Content  getContentAction={getContentAction} updateContentAction={updateContentAction} content={content} />
        )
    }
}

const mapStateToProps = ({content} :any ):{} => {
    return {
        content
    }
}

const mapDispatchToProps = (dispatch: Function):{} => {
    return {
        getContentAction: () => dispatch(getContentAction()),
        updateContentAction: (id:number, dataFavorites:boolean) => dispatch(updateContentAction(id, dataFavorites))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);