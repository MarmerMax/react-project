export const getProject = (state) => {
  return state.projects.projects.find(project => project.id === state.projects.open.id);
};

export const getProjectHours = (state) => {
  const project =  state.projects.projects.find(project => project.id === state.projects.open.id);
  return project.hours;
};