import React, {useState} from 'react';
import styled from 'styled-components';

const Login = (props) => {

  if(props.isAuth){
    props.history.push("/projects-page");
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({});

  const handleEmail = (event) => {
    const currentEmail = event.target.value;
    setEmail((prevEmail) => currentEmail);
  };

  const handlePassword = (event) => {
    const currentPassword = event.target.value;
    setPassword((prevPass) => currentPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!email || !password){
      if (!email && !password) {
        setError({
          ...error,
          email: "Email is incorrect",
          password: "Password is incorrect"
        });
      } else if(!email){
        setError({
          ...error,
          email: "Email is incorrect"
        });
      } else {
        setError({
          ...error,
          password: "Password is incorrect"
        });
      }
    } else {
      props.tryToLogin(email, password);
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <InputTitle>
            Email {error.email ? <IncorrectInput>*{error.email}</IncorrectInput> : null}
          </InputTitle>
          <InputField
            onChange={handleEmail}
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>
            Password {error.password ? <IncorrectInput>*{error.password}</IncorrectInput> : null}
          </InputTitle>
          <InputField
            onChange={handlePassword}
          />
        </InputContainer>
        <LoginButton type="submit">Login</LoginButton>
      </FormContainer>
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

const FormContainer = styled.form``;

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

const IncorrectInput = styled.span`
  color: red;
  font-size: 12px;
  text-align: right;
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
  cursor: pointer;
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