import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AddCard from "./components/AddCard";
import Header from "./components/Header";
import {AppWrapper} from "./components/Home/home.style"
const App = () => {
  return (
    <AppWrapper>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add-card" component={AddCard} />
          </Switch>
        </Router>
    </AppWrapper>
  );
};

export default App;
