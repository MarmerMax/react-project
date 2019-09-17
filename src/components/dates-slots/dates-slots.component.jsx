import React, {useState} from 'react';
import styled from 'styled-components';
import DateSlot from '../date-slot/date-slot.component';
import {createShortDate, createWeek} from "../../utils/create-date";

const DatesSlots = () => {
    const [dates, setDates] = useState(createWeek(new Date()));
    console.log(dates);

    return(
        <Container>
            {dates.map(date => <DateSlot dateData={date} key={date.date}/>)}
        </Container>
    );
};

export default DatesSlots;

const Container = styled.div`
    background: #F7F7F7;
    // width: 80%;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
`;

