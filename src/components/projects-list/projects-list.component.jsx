import React from 'react';
import styled from 'styled-components';

const ProjectsList = (props) => (
  <Container>
    {props.children}
  </Container>
);

export default ProjectsList;

const Container = styled.div`
  height: 300px;
  padding: 10px;
  background: #F7F7F7;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
`;