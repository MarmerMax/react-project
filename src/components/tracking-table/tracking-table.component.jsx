import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {withRouter} from "react-router";

import Header from "../header/header.component";
import DatesSlots from "../dates-slots/dates-slots.component";
import {createDate} from "../../utils/create-date.util";
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
        label={props.match.params.label}
        firstDate={firstDate}
      />
    </Container>
  );
};

export default withRouter(TrackingTable);

const Container = styled.div``;

