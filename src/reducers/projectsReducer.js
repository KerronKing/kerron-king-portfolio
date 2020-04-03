import PROJECTS from './projects';

const initialState = [
  ...PROJECTS,
];

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default projectsReducer;
