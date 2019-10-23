import React, {useEffect} from 'react';
import {Switch, Route, BrowserRouter as Router, Redirect} from "react-router-dom";
import styled, {ThemeProvider} from 'styled-components';
import {connect} from 'react-redux';

import TrackingTable from './components/tracking-table/tracking-table.component';
import ProjectsPage from './components/projects-page/projects-page.component';
import Login from './components/login/login.component';
import NotFoundPage from "./components/not-found-page/not-found-page.component";
import {ProtectedRoute} from "./components/protected-route/protected-route.component";

import './App.css';
import {authSuccess} from "./store/actions/index.action";

const theme = {
  primary: '#9013fe',
  secondary: '#707070'
};

const App = (props) => {

  useEffect(() => {
    // props.onTryAutoSignUp();
  }, []);

  const tryToLogin = (email, password) => {
    if (email && password) {
      // props.onLogin();
      // console.log('[tryToLogin]');
      props.authSuccess();
      // props.setItem("isKey", props.auth);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login/"/>}/>
            {/*<Route path="/login" component={Login} tryToLogin={tryToLogin}/>*/}
            <Route
              exact
              path="/login"
              render={(props) => (
                <Login
                  tryToLogin={tryToLogin}
                  {...props}
                />
              )}
            />
            <ProtectedRoute
              exact
              isAuth={props.isAuthenticated}
              path="/projects-page"
              Component={ProjectsPage}
            />
            <ProtectedRoute
              exact
              isAuth={props.isAuthenticated}
              path="/project/:label"
              Component={TrackingTable}
            />
            <Route path="*" component={NotFoundPage}/>
          </Switch>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuth,
    loading: state.auth.loading
    // auth: state.auth
  };
};

const mapDispatchToProps = {
  authSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

const Container = styled.div`
  text-align: center;
  font-family: 'Lato', sans-serif;
  max-width: 800px;
  margin: 0 auto;
`;
