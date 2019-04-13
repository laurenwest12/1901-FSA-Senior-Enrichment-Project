import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

//action types
const GET_STUDENTS = 'GET_STUDENTS';
const GET_CAMPUSES = 'GET_CAMPUSES';

//action creators
export const getStudentsAction = (students) => ({
  type: GET_STUDENTS,
  students
});

export const getCampusesAction = (campuses) => ({
  type: GET_CAMPUSES,
  campuses
});

//reducers
const students = (state = [], action) => {
  switch(action.type) {
    case GET_STUDENTS: 
      return action.students
    default:
      return state
  }
};

const campuses = (state = [], action) => {
  switch(action.type) {
    case GET_CAMPUSES:  
      return action.campuses
    default:
      return state
  }
};

//thunks
export const getStudentsThunk = () => {
  return (dispatch) => {
    axios.get('/api/students')
    .then(({data}) => dispatch(getStudentsAction(data))
    )
  }
};

export const getCampusesThunk = () => {
  return (dispatch) => {
    axios.get('/api/campuses')
    .then(({data}) => dispatch(getCampusesAction(data)))
  }
}

const reducer = combineReducers ({
        students,
        campuses
  })

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
export default store;