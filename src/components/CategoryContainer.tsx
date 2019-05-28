import React, { Component } from 'react'
import { connect } from 'react-redux'
import Category from './Category'
import { getCategoryAction, sortAction } from '../store/actions'

class CategoryContainer extends Component {

    render() {
        const { category, getCategoryAction, sortAction }:any = this.props
        return (
            <Category category={category} getCategoryAction={getCategoryAction} sortAction={sortAction}/>
        )
    }
}

const mapStateToProps = ({category}:any):{} => {
    return {
        category
    }
}
const mapDispatchToProps = (dispatch: Function):{} => {
    return {
        getCategoryAction: () => dispatch(getCategoryAction()),
        sortAction: (params:any) => dispatch(sortAction(params))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);