import React from 'react';
import styled from 'styled-components';

const DateSlot = ({date, hour, changeHours}) => {
  const handleInput = (event) => {
    const value = event.target.value;
    changeHours(date, value);
  };

  return (
    <Container>
      <DateValue>{date}</DateValue>
      <InputField
        type="text"
        value={hour || ''}
        onChange={handleInput}
      />
    </Container>
  );
};

export default DateSlot;

const Container = styled.div`
  height: 400px;
  padding: 10px;
  background: #ededed;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  font-weight: bold;
  flex-basis: 9%;
`;

const DateValue = styled.div`
  //color: #707070;
  color: ${(props) => props.theme.primary}
`;

const InputField = styled.input`
  margin: 10px;
  width: 70%;
  //height: 25px;
  border: 1px solid #D0D0D0;
  border-radius: 5px; 
  text-align: center;
  outline: none;
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
  font-size: 1.1rem;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;