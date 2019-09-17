import React from 'react';
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
      <Title>Login</Title>
      <InputContainer>
        <InputTitle>Email</InputTitle>
        <InputField/>
      </InputContainer>
      <InputContainer>
        <InputTitle>Password</InputTitle>
        <InputField/>
      </InputContainer>
      <LoginButton>Login</LoginButton>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  margin: 20% auto;
  width: 260px;
  height: 300px;
  background: #F7F7F7;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  padding: 30px 30px 40px;
  text-align: left;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 20px;
`;

const InputContainer = styled.div``;

const InputField = styled.input`
  margin-bottom: 15px;
  width: 100%;
  border: 1px solid #D0D0D0;
  border-radius: 7px;
  outline: none;
  height: 30px;
  font-size: 14px;
  font-weight: 600;
  padding: 5px;
  box-sizing: border-box;
`;

const InputTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
`;

const LoginButton = styled.button`
  width: 100%;
  border: 1px solid #b15cfc;
  border-radius: 7px;
  text-transform: uppercase;
  outline: none;
  height: 30px;
  margin-top: 15px;
  color: white;
  font-weight: bold;
  //background-color: ${(props) => props.theme.primary};
  background-color: #b15cfc;
  &:hover {
    opacity: 0.5;
  }
`;