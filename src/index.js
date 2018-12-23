import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Question from './components/Questions/Question';
import Result from './components/Result/Result';

ReactDOM.render(
                <Provider store={store}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/' component={App} />
                            <Route exact path='/questions/:id' component={Question}/>
                            <Route exact path='/result' component={ Result }/>
                        </Switch>
                    </BrowserRouter>
                </Provider>, 
                document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
