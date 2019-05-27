import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserCardInfo from './UserCardInfo'
import { getUserAction } from '../store/actions'


class UserCardInfoContainer extends Component {

    render() {
        const { user, getUserAction }:any = this.props

        return (
            <UserCardInfo user={user} getUserAction={getUserAction} />
        )
    }
}

const mapStateToProps = ({user}:any):{} => {
    return {
        user
    }
}
const mapDispatchToProps = (dispatch:Function):{} => {
    return {
        getUserAction: (id:number) => dispatch(getUserAction(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCardInfoContainer);