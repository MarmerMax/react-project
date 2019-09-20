import React from 'react';
import styled from 'styled-components';
import Spinner from "../../components/spinner/spinner.component";
import Backdrop from "../../components/backdrop/backdrop.component";

const withLoader = (WrappedComponent) => {
  return (props) => {
    if(props.loading){
      return (
        <Container>
          <WrappedComponent {...props}/>
          <Backdrop show={true}/>
          <Spinner />
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
