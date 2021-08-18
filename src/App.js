import Navbar from "./navbar/navbar";
import Write from "./write/write";
import Settings from "./settings/settings";
import Login from "./login/login";
import Signup from "./signup/signup";
import "./App.css";
import Home from "./home/home";
import Single from "./single/single";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/context";

function App() {
  const { user } = useContext(Context);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/posts">
          <Home />
        </Route>
        <Route path="/signup">{user ? <Home /> : <Signup />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{user ? <Write /> : <Login />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Login />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
