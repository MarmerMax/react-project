import React, {useState, useEffect} from 'react';
import Header from "../header/header.component";
import DatesSlots from "../dates-slots/dates-slots.component";
import styled from "styled-components";
import {createDate} from "../../utils/create-date";
import {WEEK_DURATION} from "../../constants/dates.constants";

const TrackingTable = (props) => {
  const [daysOffset, setDaysOffset] = useState(0);

  const [firstDate, setFirstDate] = useState(createDate(daysOffset));
  const [lastDate, setLastDate] = useState(createDate(WEEK_DURATION - 1, firstDate));

  useEffect(() => {
    const tempFirstDate = createDate(daysOffset);
    const tempLastDate = createDate(WEEK_DURATION - 1, tempFirstDate);
    setFirstDate(tempFirstDate);
    setLastDate(tempLastDate);
  }, [daysOffset]);

  const handlePrev = () => setDaysOffset((prevState) => prevState - 1);
  const handleNext = () => setDaysOffset((prevState) => prevState + 1);

  return (
    <Container>
      <Header
        firstDate={firstDate}
        lastDate={lastDate}
        prevDate={handlePrev}
        nextDate={handleNext}
      />
      <DatesSlots
        firstDate={firstDate}
      />
    </Container>
  );
};

export default TrackingTable;

const Container = styled.div``;

