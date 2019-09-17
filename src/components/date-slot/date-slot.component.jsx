import React, {useState} from 'react';
import styled from 'styled-components';

const DateSlot = ({dateData}) => {
  console.log("props data", dateData);

  const [hours, setHours] = useState(dateData.hours);

  const handleInput = (event) => {
    const value = event.target.value;
    setHours(value);
  };


  return (
    <Container>
      <DateValue>{dateData.date}</DateValue>
      <InputField
        type="number"
        value={hours}
        onChange={handleInput}/>
    </Container>
  );
};

export default DateSlot;

const Container = styled.div`
    height: 400px;
    padding: 10px;
    background: #E7E7E7;
    border: 1px solid #D0D0D0;
    border-radius: 5px;
    font-weight: bold;
    flex-basis: 10%;
`;

const DateValue = styled.div``;

const InputField = styled.input`
    margin: 10px;
    width: 70%;
    height: 20px;
    border: 1px solid #D0D0D0;
    border-radius: 5px; 
    text-align: center;
    outline: none;
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;