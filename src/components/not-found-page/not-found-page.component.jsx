import React from 'react';
import styled from 'styled-components';

const NotFoundPage = () => (
  <Container>
    404 NOT FOUND
  </Container>
);

export default NotFoundPage;

const Container = styled.div`
  margin: 10% auto;
  font-size: 40px;
  font-weight: bold;
  color: black;
  text-align: center;
  font-family: serif;
`;
