import React from 'react';
import styled from 'styled-components';
import {createDate} from "../../utils/create-date";

const Header = () => {
  const firstDate = createDate(new Date());
  const lastDate = createDate(new Date(), 7);


  return (
    <Container>
      <Title>Time tracking</Title>
      <DatesContainer>
        <DateTitle>{firstDate}</DateTitle>
        <DateTitle>&nbsp;-&nbsp;</DateTitle>
        <DateTitle>{lastDate}</DateTitle>
      </DatesContainer>
    </Container>
  )
};

export default Header;


const Container = styled.div`
    // font-family: sans-serif;
    padding: 10px;
    text-align: left;
`;

const Title = styled.div`
    font-size: 1.3rem;
`;

const DatesContainer = styled.div`
    display: inline-box;
    color: grey;
`;

const DateTitle = styled.div`
    font-size: 0.9rem;
`;