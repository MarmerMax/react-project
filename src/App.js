import React, {useState} from 'react';
import {Switch, Route, BrowserRouter as Router, Redirect} from "react-router-dom";
import styled, {ThemeProvider} from 'styled-components';
import {connect} from 'react-redux';

import TrackingTable from './components/tracking-table/tracking-table.component';
import ProjectsPage from './components/projects-page/projects-page.component';
import Login from './components/login/login.component';
import NotFoundPage from "./components/not-found-page/not-found-page.component";
import {ProtectedRoute} from "./components/protected-route/protected-route.component";


import './App.css';

const theme = {
  primary: '#9013fe',
  secondary: '#707070'
};

const App = (props) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  const tryToLogin = (email, password) => {
    if (email && password) {
      setIsAuthenticated(true);
      setLoading(true);
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
                  loading={loading}
                  isAuth={isAuthenticated}
                  tryToLogin={tryToLogin}
                  {...props}
                />
              )}
            />
            <ProtectedRoute
              exact
              isAuth={isAuthenticated}
              path="/projects-page"
              Component={ProjectsPage}
            />
            <ProtectedRoute
              exact
              isAuth={isAuthenticated}
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

// const mapStateToProps = (state) => {
//   return {
//     projects: state.projects
//   };
// };
//
// export default connect(mapStateToProps)(App);
export default App;

const Container = styled.div`
  text-align: center;
  font-family: 'Lato', sans-serif;
  max-width: 800px;
  margin: 0 auto;
`;
