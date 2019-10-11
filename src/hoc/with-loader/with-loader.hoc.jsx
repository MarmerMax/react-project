import React from 'react';
import styled from 'styled-components';
import Spinner from "../../components/spinner/spinner.component";
// import Backdrop from "../../components/backdrop/backdrop.component";
import Modal from '../modal/modal.hoc';

const withLoader = (WrappedComponent) => {
  return (props) => {
    if(props.loading){
      return (
        <Container>
          <WrappedComponent {...props}/>
          <Modal show={true}>
            <Spinner />
          </Modal>
          {/*<Backdrop show={true}/>*/}

        </Container>
      );
    }
    else {
      return <WrappedComponent {...props}/>;
    }
  }
};

export default withLoader;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
