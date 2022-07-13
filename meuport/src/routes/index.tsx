import { Route, Switch } from "react-router-dom";

import { HomePage } from "../pages/HomePage/MainPage";

export function Routes(): JSX.Element {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
        </Switch>
    );
}
