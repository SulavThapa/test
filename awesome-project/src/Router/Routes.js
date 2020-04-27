import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Components/Pages/Home';
import NewAdmin from '../Components/Pages/Admin';
import Error from '../Components/Pages/ErrorPage';
import TableDesign from "../Components/Tables/Table";
import BusInfo from "../Components/Pages/BusInfo";
import PrivateRoute from '../Components/private-route/PrivateRoute';
import Register from "../Components/Pages/Register";
import BusHistory from "../Components/Pages/History";

class RoutePage extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <Route exact path="/" component={Home} />
          <Switch>
            <PrivateRoute path="/admin" component={NewAdmin} />
            <PrivateRoute path="/details" component={TableDesign} />
            <PrivateRoute path="/busDetails" component={BusInfo} />
            <PrivateRoute path="/busHistory" component={BusHistory} />
            <PrivateRoute path="/register" component={Register} />
            <PrivateRoute component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default RoutePage;