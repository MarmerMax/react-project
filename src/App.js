import React from 'react';
import './App.css';
import styled from 'styled-components';
import Header from './components/header/header.component';
import DatesSlots from './components/dates-slots/dates-slots.component';

const App = () => {
  return (
    <Container>
      <Header />
      <DatesSlots />
    </Container>
  );
};

export default App;

const Container = styled.div`
  text-align: center;
  font-family: 'Lato', sans-serif;
  max-width: 800px;
  margin: 0 auto;
`;
