import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
function App() {
  const user = true
  return (
      <Router>
      <Switch>
        <Route exact path="/">
          {
            user ? <Home /> : <Redirect to="/register" />
          }
        </Route>
        <Route exact path="/login">
          {
            !user ? <Login /> : <Redirect to="/" />
          }
        </Route>
        <Route path="/register">
          {
            !user ? <Register /> : <Redirect to="/" />
          }
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
