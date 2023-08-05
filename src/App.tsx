import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Test from "./pages/Test";
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/registration" exact component={Registration} />
      <Route path="/test" exact component={Test}></Route>
    </BrowserRouter>
  );
}
export default App;
