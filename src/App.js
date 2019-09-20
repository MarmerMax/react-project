import React, {useState} from 'react';
import {Switch, Route, BrowserRouter as Router, Redirect} from "react-router-dom";
import styled, {ThemeProvider} from 'styled-components';

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

const App = () => {

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  const tryToLogin = (email, password) => {
    if (email && password) {
      setIsAuthenticated(true);
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
              path="/login"
              render={(props) => <Login {...props} isAuth={isAuthenticated} tryToLogin={tryToLogin}/>}
            />
            <ProtectedRoute
              isAuth={isAuthenticated}
              path="/projects-page"
              Component={ProjectsPage}
            />
            <ProtectedRoute
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

export default App;

const Container = styled.div`
  text-align: center;
  font-family: 'Lato', sans-serif;
  max-width: 800px;
  margin: 0 auto;
`;
