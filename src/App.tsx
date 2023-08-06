import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Test from "./pages/Test";
import "./App.css";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/registration" exact component={Registration} />
      <Route path="/test" exact component={Test}></Route>
      <Route path="/home" exact component={Home}></Route>
    </BrowserRouter>
  );
}
export default App;
