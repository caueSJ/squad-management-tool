import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import TeamForm from './containers/TeamForm/TeamForm';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route strict path="/" component={HomePage} exact />
                <Route strict path="/team/new" component={TeamForm} />
                <Route component={() => (<div style={{fontSize:'25px'}}>Erro 404: Page not found :(</div>)} />
            </Switch>
        </BrowserRouter>
  </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
