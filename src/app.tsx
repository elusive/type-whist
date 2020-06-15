import * as React from "react";
import { hot } from "react-hot-loader/root";
import { Router, Route, Switch } from "react-router";
import { GameView } from "./containers/GameView";

// render react DOM
export const App = hot(({ history }) => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" component={GameView} />
            </Switch>
        </Router>
    );
});
