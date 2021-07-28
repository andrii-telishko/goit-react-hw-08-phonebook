import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import HomeView from './views/HomeView'
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';
import Container from './components/Container'
import AppBar from './components/AppBar'
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import { authOperations } from './redux/auth'

class App extends Component {
  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <PublicRoute exact path="/" component={HomeView} />
          {/* <Route exact path="/" component={HomeView} /> */}
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts"
            component={RegisterView}
          />
          {/* <Route path="/register" component={RegisterView} /> */}
          {/* <Route path="/login" component={LoginView} /> */}
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts"
            component={LoginView}
          />
          {/* <Route path="/contacts" component={ContactsView} /> */}
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsView}
          />
        </Switch>
      </Container>
    );
  };
};



const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
