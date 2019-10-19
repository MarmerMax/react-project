import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import DateSlot from '../date-slot/date-slot.component';
import {createWeek} from "../../utils/create-date.util";
import {connect} from "react-redux";
import {getProject, getProjectHours} from "../../selectors/projects.selector";
import {setProjectHours} from "../../store/actions/projects.action";


const DatesSlots = ({firstDate, label, ...props}) => {
  const [dateLabels, setDateLabels] = useState(createWeek(firstDate));

  useEffect(() => {
    setDateLabels(createWeek(firstDate));
  }, [firstDate]);

  // console.log(dateLabels);
  // console.log('[props.hours]', props.hours)
  // console.log('[props.project]', props.project)

  return (
    <Container>
      <ProjectLabel>
        {label}
      </ProjectLabel>
      {dateLabels.map(date =>
        <DateSlot
          date={date.label}
          hour={props.hours[date.label]}
          changeHours={props.setProjectHours}
          key={date.label}
        />)}
    </Container>
  );
};

DatesSlots.propTypes = {
  firstDate: propTypes.object.isRequired,
  label: propTypes.string.isRequired
};

const mapStateToProps = state => {
  return {
    project: getProject(state),
    hours: getProjectHours(state)
  }
};

const mapDispatchTOProps = {
  setProjectHours
};

export default connect(mapStateToProps, mapDispatchTOProps)(DatesSlots);

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