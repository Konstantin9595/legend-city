import React, {Component} from 'react';
import './styles/App/App.scss';
import HeaderBottom from './components/HeaderBottom'
import HeaderTop from './components/HeaderTop'
import ContentContainer from './components/ContentContainer'
import {createStore, applyMiddleware} from "redux";
import rootReducer from './store/reducers'
import {Provider} from 'react-redux'
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="app">
                    <header className="App-header">
                        <HeaderTop/>
                        <HeaderBottom/>
                    </header>
                    <div className="wrapper">
                        <main className="container">
                            <div className="row-container">
                                <ContentContainer/>
                            </div>
                        </main>
                    </div>
                </div>
            </Provider>
        );
    }
}


export default App;
