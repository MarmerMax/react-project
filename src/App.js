import React, {useState, useEffect} from 'react';
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import styled, {ThemeProvider} from 'styled-components';

import TrackingTable from './components/tracking-table/tracking-table.component';
import ProjectsPage from './components/projects-page/projects-page.component';
import Login from './components/login/login.component';

import './App.css';

const theme = {
  primary: '#9013fe',
  secondary: '#707070'
};

const App = () => {

  const [auth, setAuth] = useState(false);

  const authTry = (email, password) => {
    if(email && password){
      setAuth(true);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login/"/>}/>
            <Route path="/login" component={Login}/>
            <Route path="/projects-page" component={ProjectsPage}/>
            <Route path="/tracking-table" component={TrackingTable}/>
          </Switch>
        </Container>
      </BrowserRouter>
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
