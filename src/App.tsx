import React, { Component } from 'react';
import '../containers/App/App.css';
import HeaderBottom from '../../components/Header/HeaderBottom'
import HeaderTop from '../../components/Header/HeaderTop'
import LeftSidebar from '../../components/LeftSidebar'
import Banner from '../../components/Banner'
import Category from '../../components/Category'
import Content from '../../components/Content'
import { connect } from 'react-redux'
import { fetchAllServices } from '../../actions/fetchAllServices'
import { fetchCategoryServices } from '../../actions/fetchCategoryServices'

export interface IProps {
    fetchCategoryServices: Function
}

class App extends Component<IProps, object> {

    render() {
        // console.log("Hello")
        // console.log(this.props)
        return (
            <div className="container">
                <header className="App-header">
                    <HeaderTop />
                    <HeaderBottom />
                </header>
                <main>
                    <LeftSidebar />
                    <Banner />
                    <Category />
                    <Content {...this.props} />
                </main>
            </div>

        );
    }
}

// const mapStateToProps = (state:object) :object => {
//     return {
//         store: state
//     }
//
// }

const mapStateToProps = (state: object): object => {
    return {
        initialData: fetchAllServices(state.data)
    }
}

const mapDispatchToProps = (dispatch: Function):object => {
    return {
        fetchCategoryServices: () => dispatch(fetchCategoryServices())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
