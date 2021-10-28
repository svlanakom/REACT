import React from "react";
import Users from "./Users.jsx";
import Home from "./Home.jsx";
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";
const App = () => {
  return (
    <div className="page">
      <BrowserRouter>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/">Home</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
export default App;
