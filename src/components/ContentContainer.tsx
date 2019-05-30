import React, { Component } from 'react'
import { connect } from 'react-redux'
import Content from './Content'
import LeftSidebar from './LeftSidebar'

import { getContentAction, updateContentAction, sortAction } from '../store/actions'



class ContentContainer extends Component{

    render() {
        const {getContentAction, updateContentAction, sortAction, content }:any = this.props

        return (
            <div className="content row">
                <LeftSidebar />
                <Content getContentAction={getContentAction} updateContentAction={updateContentAction} sortAction={sortAction} content={content} />
            </div>
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
        updateContentAction: (id:number, dataFavorites:boolean) => dispatch(updateContentAction(id, dataFavorites)),
        sortAction: (params:any) => dispatch(sortAction(params))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);