import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Aux from '../auxiliary/auxiliary.hoc';
import Backdrop from '../../components/backdrop/backdrop.component';

const Modal = ({show, modalClosed, ...props}) => {

  console.log(modalClosed)
  return (
    <Aux>
      <Backdrop show={show} close={modalClosed} />
      <Container
        style={{
          transform: show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: show ? '1' : '0'
        }}>
        {props.children}
      </Container>
    </Aux>
  );
};

Modal.propTypes = {
  show: propTypes.bool.isRequired,
  modalClosed: propTypes.func.isRequired
};

export default React.memo(Modal, (prevProps, nextProps) =>
  nextProps.show === prevProps.show &&
  nextProps.children === prevProps.children
);

const Container = styled.div`
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
`;