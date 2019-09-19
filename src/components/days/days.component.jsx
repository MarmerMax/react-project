import React from 'react';
import styled from "styled-components";

const Days = (props) => {
  return (
    <DaysStyled>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
    </DaysStyled>
  );
};

export default Days;

const DaysStyled = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
`;