import React from 'react';
import styled from 'styled-components';

const Project = ({name, id, remove, edit}) => {

  const handleDelete = () => {
    remove(id);
  };

  const handleEdit = () => {
    edit(id, name);
  };

  return (
    <Container>
      <ProjectTitle>{name}</ProjectTitle>
      <ProjectProperties>
        <ProjectEdit onClick={handleEdit}>Edit</ProjectEdit>
        <Space>&nbsp; | &nbsp;</Space>
        <ProjectDelete onClick={handleDelete}>Delete</ProjectDelete>
      </ProjectProperties>
    </Container>
  );
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