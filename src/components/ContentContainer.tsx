import React, { Component } from 'react'
import { connect } from 'react-redux'
import Content from './Content'
import { getContentAction } from '../store/actions'



class ContentContainer extends Component{

    render() {
        const {getContentAction, content }:any = this.props

        return (
            <Content getContentAction={getContentAction} content={content} />
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
        getContentAction: () => dispatch(getContentAction())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);