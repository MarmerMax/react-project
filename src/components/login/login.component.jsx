import React, {useState} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import {Redirect} from "react-router-dom";
import {validate} from "../../utils/validate.util";
import withLoader from "../../hoc/with-loader/with-loader.hoc";
import {connect} from 'react-redux';
import {auth} from '../../store/actions/index.action';


const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSignin, setIsSignin] = useState(true);

  const handleEmail = (event) => {
    const currentEmail = event.target.value;
    setEmail((prevEmail) => currentEmail);
  };

  const handlePassword = (event) => {
    const currentPassword = event.target.value;
    setPassword((prevPass) => currentPassword);
  };

  const handleSwitch = () => {
    setIsSignin(!isSignin);
  };

  const handleSubmit = (event) => {
    setErrors({});
    event.preventDefault();
    const validationErrors = validate(email, password);
    // console.log("ERRORS", validationErrors)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      props.auth(email, password, isSignin);
      props.tryToLogin(email, password);
    }
    // if (!email || !password) {
    //   if (!email && !password) {
    //     setErrors({
    //       ...errors,
    //       email: "Email is incorrect",
    //       password: "Password is incorrect"
    //     });
    //   } else if (!email) {
    //     setErrors({
    //       ...errors,
    //       email: "Email is incorrect"
    //     });
    //   } else if (password && (password.length < 6)) {
    //     setErrors({
    //       ...errors,
    //       password: "Password have to be at least 6 characters"
    //     });
    //   } else {
    //     setErrors({
    //       ...errors,
    //       password: "Password is incorrect"
    //     });
    //   }
    // } else {
    //   props.auth(email, password);
    //   props.tryToLogin(email, password);
    // }
  };

  // TODO: return to normal code without setInterval...
  if (props.isAuthenticated) {
    return <Redirect to="/projects-page"/>;
  }

  return (
    <Container>
      <Title>Login</Title>
      <LoginForm onSubmit={handleSubmit}>
        <InputContainer>
          <InputTitle>
            Email {errors.email ? <IncorrectInput>*{errors.email}</IncorrectInput> : null}
          </InputTitle>
          <InputField
            onChange={handleEmail}
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>
            Password {errors.password ? <IncorrectInput>*{errors.password}</IncorrectInput> : null}
          </InputTitle>
          <InputField
            onChange={handlePassword}
          />
        </InputContainer>
        <LoginButton type="submit">
          {isSignin ? "signin" : "signup"}
        </LoginButton>
        <SwitchButton onClick={handleSwitch}>
          Switch to {isSignin ? "signup" : "signin"}
        </SwitchButton>
      </LoginForm>
    </Container>
  );
};

Login.propTypes = {
  tryToLogin: propTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuth,
    loading: state.auth.loading
  };
};

const mapDispatchToProps = {
  auth
};

export default withLoader(connect(mapStateToProps, mapDispatchToProps)(Login));

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

const LoginForm = styled.form``;

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
  background-color: ${(props) => props.theme.primary};
  //background-color: #b15cfc;
  &:hover {
    opacity: 0.5;
  }
`;

const SwitchButton = styled.div`
  width: 100%;
  text-transform: uppercase;
  cursor: pointer;
  margin-top: 15px;
  color: black;
  font-weight: bold;
  text-align: center;
  font-size: 13px;
  &:hover {
    opacity: 0.5;
  }
`;