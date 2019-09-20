import React from 'react';
import styled from 'styled-components';

const Backdrop = (props) => (
  props.show ? <Container onClick={props.drop}/> : null
);

export default Backdrop;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 0;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 1);
  opacity: 0.5;
`;