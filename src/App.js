import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './containers/HomePage/HomePage';
import TeamForm from './containers/TeamForm/TeamForm';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route strict path="/" component={HomePage} exact />
                <Route strict path="/team/new" component={TeamForm} />
                <Route component={() => (<div style={{fontSize:'25px'}}>Erro 404: Page not found :(</div>)} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;