import React, { Component } from 'react';

import { BrowserRouter,Switch, Route } from "react-router-dom";

import Home from "./components/Home"
import List from "./components/List"
import TodoList from "./components/TodoList"

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/list" component={List}></Route>
                <Route path='/TodoList' component={TodoList}/>
                <Route component={Home}></Route>
            </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
