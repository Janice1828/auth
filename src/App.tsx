import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Test from "./pages/Test";
import "./App.css";
import Home from "./pages/Home";
import ProtectedRoute from "./component/ProtectedRoute";
function App() {
  const auth = localStorage.getItem("loggedIn");

  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/registration" exact component={Registration} />
      <Route path="/test" exact component={Test} />
      <Route path="/home" exact render={({ location }) => auth ? ( <Home /> ) : (<Redirect to={{ pathname: "/", state: { from: location },}}
            />
          )
        }
      />
    </BrowserRouter>
  );
}
export default App;
