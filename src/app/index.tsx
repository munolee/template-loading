import React from 'react';
import {Route, Router, Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const Root: React.FC = () => (
    <Router history={history}>
        <>
            <Switch>
                {/*<Route path="/" exact component={Main}/>*/}
            </Switch>
        </>
    </Router>
);

export default Root;