import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Project = ({open, name, id, remove, edit}) => {
  return (
    <Container>
      <ProjectTitle onClick={() => open(id, name)}>{name}</ProjectTitle>
      <ProjectProperties>
        <ProjectEdit onClick={() => edit(id, name)}>Edit</ProjectEdit>
        <Space>&nbsp; | &nbsp;</Space>
        <ProjectDelete onClick={remove}>Delete</ProjectDelete>
      </ProjectProperties>
    </Container>
  );
};

Project.propTypes = {
  open: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  remove: propTypes.func.isRequired,
  edit: propTypes.func.isRequired
};

export default Project;

const Container = styled.div`
  background-color: #fff;
  margin: 10px;
  height: 35px;
  border: 1px solid #D0D0D0;
  border-radius: 5px;
  color: #454545;
  font-weight: bold;
  font-size: 1.1rem;
  box-sizing: border-box;
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
  cursor: pointer;
`;

const ProjectProperties = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  display: flex;
`;

const ProjectEdit = styled.div`
  cursor: pointer;
`;

const ProjectDelete = styled.div`
  color: red;
  cursor: pointer;
`;

const Space = styled.div``;