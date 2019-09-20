import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Backdrop = ({show, close}) => (
  show ? <Container onClick={close}/> : null
);

Backdrop.propTypes = {
  show: propTypes.bool.isRequired,
  close: propTypes.func
};

export default Backdrop;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: rgba(255, 255, 255, 1);
  opacity: 0.5;
`;