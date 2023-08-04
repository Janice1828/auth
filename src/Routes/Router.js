import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
const Routers = () => {
  <BrowserRouter>
    <Routes>
      <Route path="/" component={<Login />}></Route>
      <Route path="/registration" component={<Registration />}></Route>
    </Routes>
  </BrowserRouter>;
};

export default Routers;
