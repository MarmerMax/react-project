import React from 'react';
import styled from 'styled-components';

const ProjectsPage = () => {
  return (
    <Container>
      <Title>Projects</Title>
      <ProjectsContainer>
        <AddProjectButton>Add Project</AddProjectButton>
        <ProjectsList>
          <Project>
            <ProjectTitle>1</ProjectTitle>
            <ProjectProperties>
              <ProjectEdit>Edit</ProjectEdit>
              <Space>&nbsp; | &nbsp;</Space>
              <ProjectDelete>Delete</ProjectDelete>
            </ProjectProperties>
          </Project>
          <Project>
            <ProjectTitle>2</ProjectTitle>
            <ProjectProperties>
              <ProjectEdit>Edit</ProjectEdit>
              <Space>&nbsp; | &nbsp;</Space>
              <ProjectDelete>Delete</ProjectDelete>
            </ProjectProperties>
          </Project>
          <Project>
            <ProjectTitle>3</ProjectTitle>
            <ProjectProperties>
              <ProjectEdit>Edit</ProjectEdit>
              <Space>&nbsp; | &nbsp;</Space>
              <ProjectDelete>Delete</ProjectDelete>
            </ProjectProperties>
          </Project>
          <Project>
            <ProjectTitle>4</ProjectTitle>
            <ProjectProperties>
              <ProjectEdit>Edit</ProjectEdit>
              <Space>&nbsp; | &nbsp;</Space>
              <ProjectDelete>Delete</ProjectDelete>
            </ProjectProperties>
          </Project>
        </ProjectsList>
      </ProjectsContainer>
    </Container>
  );
};

export default ProjectsPage;

const Container = styled.div``;

const Title = styled.div`
  font-size: 22px;
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  text-align: left;
  padding: 20px 0;
`;

const ProjectsContainer = styled.div`
  margin: 20px auto;
  width: 440px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10px;
`;

const AddProjectButton = styled.button`
  cursor: pointer;
  align-self: flex-end;
  width: 120px;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 7px;
  text-transform: uppercase;
  outline: none;
  height: 30px;
  margin: 10px 0;
  color: white;
  font-weight: bold;
  background-color: ${(props) => props.theme.primary};
  &:hover {
    opacity: 0.5;
  }
`;

const ProjectsList = styled.div`
  height: 300px;
  padding: 10px;
  background: #F7F7F7;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
`;

const Project = styled.div`
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
