import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../client/Home';
import Login from '../client/Login';
import Signup from '../client/Signup';
import Error from '../client/Error';
import Navigation from '../client/Navigation';
import Profile from '../client/Profile';


class App extends React.Component {
  render() {
    return (

      <BrowserRouter>
      <div>
        <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/profile/:name" component={Profile} />
            <Route component={Error} />
          </Switch>
       </div>
     </BrowserRouter>
    );
  }
}

export default App;
