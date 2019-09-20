import React from 'react';
import styled from 'styled-components';
import Aux from '../auxiliary/auxiliary.hoc';
import Backdrop from '../../components/backdrop/backdrop.component';

const modal = (props) => {


  return (
    <Aux>
      <Backdrop show={props.show} drop={props.modalClosed} />
      <Container
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}>
        {props.children}
      </Container>
    </Aux>
  );
};

export default React.memo(modal, (prevProps, nextProps) =>
  nextProps.show === prevProps.show &&
  nextProps.children === prevProps.children
);

const Container = styled.div``;