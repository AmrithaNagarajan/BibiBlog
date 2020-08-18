import React,{Component} from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import Followers from "./components/Followers";
import Settings from "./components/Settings";


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/MainPage" component={MainPage} />
      <Route exact path="/Followers" component={Followers} />
      <Route exact path="/Settings" component={Settings} />
    </Switch>
    </Router>
  );
}

export default App;
