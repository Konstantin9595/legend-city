import React, {Component} from 'react';
import './styles/App/App.scss';
import HeaderBottom from './components/HeaderBottom'
import HeaderTop from './components/HeaderTop'
import LeftSidebar from './components/LeftSidebar'
import Banner from './components/Banner'
import CategoryContainer from './components/CategoryContainer'
import ContentContainer from './components/ContentContainer'
import Content from './components/Content'
import {createStore, applyMiddleware} from "redux";
import rootReducer from './store/reducers'
import {Provider} from 'react-redux'
import logger from "redux-logger";
import thunk from "redux-thunk";
import NavigationContainer from "./components/NavigationContainer";
import UserContainer from './components/UserContainer'

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <header className="App-header">
                        <HeaderTop/>
                        {/*<UserContainer />*/}
                        <HeaderBottom/>
                    </header>
                    <main>
                        <div className="container">
                            <div className="row-container">
                                <ContentContainer />
                            </div>
                        </div>
                    </main>
                </div>
            </Provider>
        );
    }
}


export default App;
