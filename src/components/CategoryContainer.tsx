import React, { Component } from 'react'
import { connect } from 'react-redux'
import Category from './Category'
import { getCategoryAction } from '../store/actions'

class CategoryContainer extends Component {

    render() {
        const { category, getCategoryAction }:any = this.props
        return (
            <Category category={category} getCategoryAction={getCategoryAction} />
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
        getCategoryAction: () => dispatch(getCategoryAction())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CategoryContainer);