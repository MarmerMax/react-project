import React, {useEffect} from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';

import ProjectsList from "../projects-list/projects-list.component";
import Project from "../project/project.component";
import AddNewProject from "../add-new-project/add-new-project.component";
import EditProject from "../edit-project/edit-project.component";
import Modal from '../../hoc/modal/modal.hoc';
import {authLogout} from "../../store/actions/index.action";
import {saveProject, deleteProject, updateProject, openProject} from "../../store/actions/index.action";
import {openAddWindow, openEditWindow, closeWindow} from '../../store/actions/index.action';

const ProjectsPage = (props) => {

  useEffect(() => {
    props.openProject('');
  }, []);

  const openProject = (id, label) => {
    props.openProject(id);
    props.history.push(`/project/${label}`);
  };

  const saveProject = (project) => {
    props.saveProject(project);
    props.closeWindow();
  };

  const updateProject = (id, label) => {
    props.updateProject(id, label);
    props.closeWindow();
  };

  return (
    <Container>
      <TitleContainer>
        <Title>Projects</Title>
        <LogoutButton onClick={props.authLogout}>Logout</LogoutButton>
      </TitleContainer>
      {
        props.showAddWindow
          ?
          (<Modal show={props.showAddWindow} modalClosed={props.closeWindow}>
            <AddNewProject
              saveProject={saveProject}
              projects={props.projects}
            />
          </Modal>)
          : null
      }
      {
        props.showEditWindow
          ?
          (<Modal show={props.showEditWindow} modalClosed={props.closeWindow}>
            <EditProject
              label={props.editProjectLabel}
              id={props.editProjectId}
              saveProject={updateProject}
              projects={props.projects}
            />
          </Modal>)
          : null
      }
      <ProjectsContainer>
        <AddProjectButton onClick={props.openAddWindow}>
          Add Project
        </AddProjectButton>
        <ProjectsList>
          {props.projects.map(project => (
            <Project
              open={openProject}
              name={project.label}
              key={project.id}
              id={project.id}
              remove={() => props.deleteProject(project.id)}
              edit={props.openEditWindow}
            />
          ))}
        </ProjectsList>
      </ProjectsContainer>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.projects.projects,
    showAddWindow: state.ui.show.addWindow,
    showEditWindow: state.ui.show.editWindow,
    editProjectId: state.ui.edit.id,
    editProjectLabel: state.ui.edit.label
  }
};

const mapDispatchToProps = {
  openProject,
  saveProject,
  deleteProject,
  updateProject,
  openAddWindow,
  openEditWindow,
  closeWindow,
  authLogout
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsPage));

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  font-size: 22px;
  color: ${(props) => props.theme.primary};
  font-weight: bold;
  text-align: left;
  padding: 20px 0;
  align-self: flex-start;
`;

const LogoutButton = styled.div`
  color: darkred;
  cursor: pointer;
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  padding: 20px 0;
  align-self: flex-start;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
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