import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
// import {withRouter} from "react-router-dom";

import ProjectsList from "../projects-list/projects-list.component";
import Project from "../project/project.component";
import AddNewProject from "../add-new-project/add-new-project.component";
import Backdrop from "../backdrop/backdrop.component";
import EditProject from "../edit-project/edit-project.component";

const ProjectsPage = () => {

  const [projects, setProjects] = useState([]);
  const [showAddProject, setShowAddProject] = useState(false);
  const [showEditProject, setShowEditProject] = useState(false);
  const [editData, setEditData] = useState({
    id: '',
    label: ''
  });

  const handleAddProject = () => {
    setShowAddProject(true);
  };

  const handleDropWindow = () => {
    setShowAddProject(false);
  };

  const saveProject = (project) => {
    const tempProjects = [...projects, project];
    setProjects(tempProjects);
    setShowAddProject(false);
    setShowEditProject(false);
    setEditData({
      id: '',
      label: ''
    });
  };

  const deleteProject = (id) => {
    const tempProjects = projects.filter(project => project.id !== id);
    setProjects(tempProjects);
  };

  // const updateProject = (id, newLabel) => {
  //   const changedProjects = projects.find(product => product.id === id)
  //     .forEach(project => project.name = newLabel);
  //   console.log(changedProjects);
  // };

  const handleEdit = (id, name) => {
    setEditData({
      ...editData,
      id: id,
      label: name
    });
    setShowEditProject(true);
  };

  return (
    <Container>
      <Title>Projects</Title>
      <ProjectsContainer>
        <AddProjectButton onClick={handleAddProject}>
          Add Project
        </AddProjectButton>
        <ProjectsList>
          {
            showAddProject
              ? <>
                <Backdrop show={showAddProject} drop={handleDropWindow}/>
                <AddNewProject createProject={saveProject} projects={projects}/>
              </>
              : null
          }
          {
            showEditProject
              ? <>
                <Backdrop show={showEditProject} drop={handleDropWindow}/>
                <EditProject
                  newLabel={editData}
                  saveProject={saveProject}
                  projects={projects}
                />
              </>
              : null
          }
          {projects.map(project => (
            <Project
              name={project.label}
              key={project.id}
              id={project.id}
              remove={deleteProject}
              edit={handleEdit}
            />
          ))}
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