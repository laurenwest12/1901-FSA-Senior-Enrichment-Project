import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

//action types
const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_STUDENTS = 'GET_STUDENTS';
const GET_CAMPUS = 'GET_CAMPUS';
const GET_STUDENT = 'GET_STUDENT';
const EDIT_CAMPUS = 'EDIT_CAMPUS';
const EDIT_STUDENT = 'EDIT_STUDENT';

//action creators
const getCampusesAction = campuses => ({
  type: GET_CAMPUSES,
  campuses
});

const getStudentsAction = students => ({
  type: GET_STUDENTS,
  students
});

const getCampusAction = campus => ({
  type: GET_CAMPUS,
  campus
});

const getStudentAction = student => ({
  type: GET_STUDENT,
  student
});

const editCampusAction = campus => ({
  type: EDIT_CAMPUS,
  campus
});

const editStudentAction = student => ({
  type: EDIT_STUDENT,
  student
});
//reducers
const campuses = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
};

const students = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    default:
      return state;
  }
};

const campus = (state = {}, action) => {
  switch (action.type) {
    case GET_CAMPUS:
      return action.campus;
    case EDIT_CAMPUS:
      return action.campus;
    default:
      return state;
  }
};

const student = (state = {}, action) => {
  switch (action.type) {
    case GET_STUDENT:
      return action.student;
    default:
      return state;
  }
};

//thunks
export const getCampusesThunk = () => {
  return dispatch => {
    axios
      .get('/api/campuses')
      .then(({ data }) => dispatch(getCampusesAction(data)));
  };
};

export const getStudentsThunk = () => {
  return dispatch => {
    axios
      .get('/api/students')
      .then(({ data }) => dispatch(getStudentsAction(data)));
  };
};

export const getCampusThunk = id => {
  return dispatch => {
    axios
      .get(`/api/campus/${id}`)
      .then(({ data }) => dispatch(getCampusAction(data)));
  };
};

export const getStudentThunk = id => {
  return dispatch => {
    axios
      .get(`/api/student/${id}`)
      .then(({ data }) => dispatch(getStudentAction(data)));
  };
};

export const postCampusThunk = newCampus => {
  console.log(newCampus);
  return dispatch => {
    axios
      .post('/api/campus/', newCampus)
      .then(() => dispatch(getCampusesThunk()));
  };
};

export const postStudentThunk = newStudent => {
  return dispatch => {
    axios
      .post('/api/student/', newStudent)
      .then(() => dispatch(getStudentsThunk()));
  };
};

export const deleteCampusThunk = id => {
  return dispatch => {
    axios.delete(`/api/campus/${id}`).then(() => dispatch(getCampusesThunk()));
  };
};

export const deleteStudentThunk = id => {
  return dispatch => {
    axios.delete(`/api/student/${id}`).then(() => dispatch(getStudentsThunk()));
  };
};

export const editCampusThunk = (id, editedCampus) => {
  return dispatch => {
    axios
      .put(`/api/campus/${id}`, editedCampus)
      .then(({ data }) => dispatch(editCampusAction(data)));
  };
};

export const editStudentThunk = (id, editedStudent) => {
  return dispatch => {
    axios
      .put(`/api/student/${id}`, editedStudent)
      .then(({ data }) => dispatch(editStudentAction(data)));
  };
};

const reducer = combineReducers({
  students,
  campuses,
  campus,
  student
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export default store;
