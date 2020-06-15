import * as React from "react";
import * as ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { App } from "./app";
import { AppContext, stores } from "./AppContext";

// prepare history
const history = createBrowserHistory();

// render react DOM
ReactDOM.render(
    <AppContext.Provider value={stores}>
        <App history={history} />
    </AppContext.Provider>,
    document.getElementById("root")
);
