import React from 'react';
import styled from 'styled-components';

const Spinner = () => {
  return (
    <Container>
      <RunningSpinner/>
    </Container>
  );
};

export default Spinner;

const Container = styled.div`
  position: fixed;
  z-index: 300;
`;

const RunningSpinner = styled.div`
  font-size: 10px;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #bb60b9;
  background: -moz-linear-gradient(left, #bb60b9 10%, rgba(187,96,185, 0) 42%);
  background: -webkit-linear-gradient(left, #bb60b9 10%, rgba(187,96,185, 0) 42%);
  background: -o-linear-gradient(left, #bb60b9 10%, rgba(187,96,185, 0) 42%);
  background: -ms-linear-gradient(left, #bb60b9 10%, rgba(187,96,185, 0) 42%);
  background: linear-gradient(to right, #bb60b9 10%, rgba(187,96,185, 0) 42%);
  position: relative;
  -webkit-animation: load3 1.4s infinite linear;
  animation: load3 1.4s infinite linear;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  &:before {
  width: 50%;
  height: 50%;
  background: #bb60b9;
  border-radius: 100% 0 0 0;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  }
  &:after {
  background: white;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  content: '';
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
