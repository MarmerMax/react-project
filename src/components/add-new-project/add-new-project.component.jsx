import React, {useState} from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import withLoader from "../../hoc/with-loader/with-loader.hoc";
import v4 from "uuid/v4";

const AddNewProject = ({projects, saveProject}) => {

  const [project, setProject] = useState({
    label: '',
    id: v4(),
    hours: {}
  });
  const [error, setError] = useState({});

  const handleInput = (event) => {
    const tempLabel = event.target.value;
    setProject({
      ...project,
      label: tempLabel
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!project.label) {
      setError({label: "Enter the label of project"});
    } else if (projects.some(item => item.label === project.label)) {
      setError({label: "The label is already exists"})
    } else {
      saveProject(project);
    }
  };

  return (
    <Container>
      <Title>Add new project</Title>
      <ProjectForm onSubmit={handleSubmit}>
        <ProjectLabel>Project label</ProjectLabel>
        {error.label && <IncorrectInput>*{error.label}</IncorrectInput>}
        <ProjectInput autoFocus onChange={handleInput}/>
        <SaveButton type="submit">Save</SaveButton>
      </ProjectForm>
    </Container>
  );
};

AddNewProject.propTypes = {
  projects: propTypes.arrayOf(propTypes.object).isRequired,
  saveProject: propTypes.func.isRequired
};

export default withLoader(AddNewProject);

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

const Title = styled.div`
  font-size: 18px;
  text-align: left;
  margin-left: 10px;
  font-weight: bold;
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



