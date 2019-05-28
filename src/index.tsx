import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Api from './services/Api'

// const req = new Api()

// req
//     .getWhere("services", {"favorites": true})
//     .then(res => console.log("getWhereResult = ", res))
//     .catch(err => console.log("err = ", err))

// req.updateFavoriteEntity(1, false)
//     .then(res => console.log("updateFavoriteEntitySUCCECC",res))
//     .catch(err => console.log("updateFavoriteEntityERROR", err))

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();