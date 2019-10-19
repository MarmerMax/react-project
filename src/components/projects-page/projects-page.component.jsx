import React from 'react';
import styled from 'styled-components';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';

import ProjectsList from "../projects-list/projects-list.component";
import Project from "../project/project.component";
import AddNewProject from "../add-new-project/add-new-project.component";
import EditProject from "../edit-project/edit-project.component";
import Modal from '../../hoc/modal/modal.hoc';
import {saveProject, deleteProject, updateProject, editProject, addProject, closeProject, openProject} from "../../store/actions/index.action";

const ProjectsPage = (props) => {

  const openProject = (id, label) => {
    props.openProject(id);
    props.history.push(`/project/${label}`);
  };

  // console.log('[projects]: ', props.projects);

  return (
    <Container>
      <Title>Projects</Title>
      {
        props.showAddProject
          ?
          (<Modal show={props.showAddProject} modalClosed={props.closeProject}>
            <AddNewProject
              createProject={props.saveProject}
              projects={props.projects}
            />
          </Modal>)
          : null
      }
      {
        props.showEditProject
          ?
          (<Modal show={props.showEditProject} modalClosed={props.closeProject}>
            <EditProject
              label={props.editLabel}
              id={props.editId}
              saveProject={props.updateProject}
              projects={props.projects}
            />
          </Modal>)
          : null
      }
      <ProjectsContainer>
        <AddProjectButton onClick={props.addProject}>
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
              edit={props.editProject}
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
    showAddProject: state.projects.show.addProject,
    showEditProject: state.projects.show.editProject,
    editId: state.projects.edit.id,
    editLabel: state.projects.edit.label
  }
};

const mapDispatchToProps = {
  openProject,
  addProject,
  saveProject,
  deleteProject,
  updateProject,
  editProject,
  closeProject
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectsPage));

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