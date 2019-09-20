import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import DateSlot from '../date-slot/date-slot.component';
import {createWeek} from "../../utils/create-date.util";

const DatesSlots = ({firstDate, label}) => {
  const [dateLabels, setDateLabels] = useState(createWeek(firstDate));
  const [hours, setHours] = useState({});

  useEffect(() => {
    setDateLabels(createWeek(firstDate));
  }, [firstDate]);

  const changeHours = (day, hour) => {
    const tempHours = {...hours};
    tempHours[day] = hour;
    setHours(tempHours);
  };

  return (
    <Container>
      <ProjectLabel>
        {label}
      </ProjectLabel>
      {dateLabels.map(date =>
        <DateSlot
          date={date.label}
          hour={hours[date.label]}
          changeHours={changeHours}
          key={date.label}
        />)}
    </Container>
  );
};

export default DatesSlots;

const Container = styled.div`
  background: #F7F7F7;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

const ProjectLabel = styled.div`
  margin-right: 10px;
  flex-basis: 10%;
  color: #454545;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 10px 0;
  text-align: left;
`;