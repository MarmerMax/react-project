import React, {useState} from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";

import ProjectsList from "../projects-list/projects-list.component";
import Project from "../project/project.component";
import AddNewProject from "../add-new-project/add-new-project.component";
import EditProject from "../edit-project/edit-project.component";
import Modal from '../../hoc/modal/modal.hoc';

const ProjectsPage = (props) => {
  const [projects, setProjects] = useState([
    {id: '23', label: '222'}
  ]);
  const [showAddProject, setShowAddProject] = useState(false);
  const [showEditProject, setShowEditProject] = useState(false);
  const [editData, setEditData] = useState({
    id: '',
    label: ''
  });

  const handleAddProject = () => {
    setShowAddProject(true);
  };

  const handleCloseBackdrop = () => {
    setShowAddProject(false);
    setShowEditProject(false);
  };


  const saveProject = (project) => {
    const tempProjects = [...projects, project];
    setProjects(tempProjects);
    setShowAddProject(false);
  };


  const deleteProject = (id) => {
    const tempProjects = projects.filter(project => project.id !== id);
    setProjects(tempProjects);
  };

  const updateProject = (updatedProject) => {
    const indexOfChangedProject = projects.findIndex(project => project.id === updatedProject.id);

    let changedProjects = [...projects];
    changedProjects[indexOfChangedProject].label = updatedProject.label;

    setProjects(changedProjects);
    setShowEditProject(false);
    setEditData({
      id: '',
      label: ''
    });
  };

  const handleEdit = (id, name) => {
    setEditData({
      ...editData,
      id: id,
      label: name
    });
    setShowEditProject(true);
  };

  const openProject = (label) => {
    props.history.push(`/project/${label}`);
  };

  return (
    <Container>
      <Title>Projects</Title>
      {
        showAddProject
          ?
          (<Modal show={showAddProject} modalClosed={handleCloseBackdrop}>
            <AddNewProject
              createProject={saveProject}
              projects={projects}
            />
          </Modal>)
          : null
      }
      {
        showEditProject
          ?
          (<Modal show={showEditProject} modalClosed={handleCloseBackdrop}>
            <EditProject
              newLabel={editData}
              saveProject={updateProject}
              projects={projects}
            />
          </Modal>)
          : null
      }
      <ProjectsContainer>
        <AddProjectButton onClick={handleAddProject}>
          Add Project
        </AddProjectButton>
        <ProjectsList>
          {projects.map(project => (
            <Project
              open={openProject}
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

export default withRouter(ProjectsPage);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 22px;
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  text-align: left;
  padding: 20px 0;
  align-self: flex-start;
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