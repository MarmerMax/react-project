import React, {useState} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const EditProject = ({label, id, saveProject, projects}) => {
  const [error, setError] = useState({});
  const [updatedProject, setUpdatedProjects] = useState({
    label: label,
    id: id
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if(!updatedProject.label){
      setError({label: "Enter the label of project"});
    } else if(projects.some(project => (project.label === updatedProject.label && project.id !== updatedProject.id))) {
      setError({label: "The name is already exists"})
    } else {
      saveProject(updatedProject.label);
    }
  };

  const handleInput = (event) => {
    const tempLabel = event.target.value;
    setUpdatedProjects({
      ...updatedProject,
      label: tempLabel
    });
  };

  return (
    <Container>
      {<ProjectForm onSubmit={handleSubmit}>
        <ProjectLabel>Project label</ProjectLabel>
        {error.label ? <IncorrectInput>*{error.label}</IncorrectInput> : null}
        <ProjectInput autoFocus onChange={handleInput} value={updatedProject.label}/>
        <SaveButton type="submit">Save</SaveButton>
      </ProjectForm>}
    </Container>
  );
};

EditProject.propTypes = {
  label: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  saveProject: propTypes.func.isRequired,
  projects: propTypes.arrayOf(propTypes.object).isRequired
};

export default EditProject;

const Container = styled.div`
  z-index: 100;
  padding: 10px;
  background: white;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  width: 200px;
  box-shadow: 0px 0px 6px grey;
  padding: 16px 10px;
  box-sizing: border-box;
  transition: all 0.3s ease-out;
`;

const ProjectForm = styled.form`
  text-align: left;
`;

const ProjectLabel = styled.div`
  text-align: left;
  font-size: 14px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const ProjectInput = styled.input`
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #D0D0D0;
  border-radius: 7px;
  outline: none;
  height: 30px;
  font-size: 14px;
  font-weight: 600;
  padding: 5px;
  box-sizing: border-box;
`;

const SaveButton = styled.button`
  cursor: pointer;
  align-self: flex-end;
  width: 100%;
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

const IncorrectInput = styled.span`
  color: red;
  font-size: 12px;
  text-align: right;
`;



