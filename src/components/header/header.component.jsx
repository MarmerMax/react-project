import React from 'react';
import styled from 'styled-components';
import {dateToString} from "../../utils/create-date.util";

const Header = ({firstDate, lastDate, prevDate, nextDate}) => {

  return (
    <Container>
      <TitleContainer>
        <Title>Time tracking</Title>
        <DateTitle>{dateToString(firstDate)} - {dateToString(lastDate)}</DateTitle>
      </TitleContainer>
      <ButtonsContainer>
        <PrevButton onClick={prevDate}>Previous</PrevButton>
        <Button onClick={nextDate}>Next</Button>
      </ButtonsContainer>
    </Container>
  )
};

export default Header;


const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Title = styled.div`
  font-size: 22px;
  color: ${(props) => props.theme.primary};
  font-weight: bold;
`;

const TitleContainer = styled.div`
  text-align: left;
`;

const DateTitle = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.secondary};
`;

const ButtonsContainer = styled.div``;

const Button = styled.button`
  width: 100px;
  border-radius: 5px;
  border: 1px solid #e1e1e1;
  outline: none;
  font-weight: bold;
  text-transform: uppercase;
  padding: 5px;
  //color: #707070;
  //background-color: #ededed;
  color: white;
  background-color: ${(props) => props.theme.primary};
  &:hover {
    //background-color: #707070;
    color: white;
    opacity: 0.5;
  }
`;

const PrevButton = styled(Button)`
  margin-right: 10px;
`;

