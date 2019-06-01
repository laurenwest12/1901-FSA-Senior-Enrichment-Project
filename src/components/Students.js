import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getStudentsThunk,
  getCampusesThunk,
  postStudentThunk,
  deleteStudentThunk
} from '../store';
import { Link } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
  return {
    getStudents: dispatch(getStudentsThunk()),
    getCampuses: dispatch(getCampusesThunk()),
    postStudent: newStudent => dispatch(postStudentThunk(newStudent)),
    deleteStudent: id => dispatch(deleteStudentThunk(id))
  };
};

const mapStateToProps = state => {
  return {
    students: state.students,
    campuses: state.campuses
  };
};

class Students extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: undefined,
      gpa: undefined,
      campusId: undefined
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.postStudent(this.state);
  }

  handleClear() {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: '',
      gpa: ''
    });
  }

  render() {
    const { students, campuses, deleteStudent } = this.props;

    const findCampusName = id => {
      if (id) {
        const campus = campuses.filter(campus => campus.id === id && campus);
        if (campus.length) {
          return campus[0].name;
        }
      }
    };

    return (
      <div className="componentBody">
        <table className="table table-hover">
          <thead className="thead">
            <tr>
              <th scope="col">FIRST</th>
              <th scope="col">LAST</th>
              <th scope="col">GPA</th>
              <th scope="col">EMAIL</th>
              <th scope="col">SCHOOL</th>
              <th scop="col" />
            </tr>
          </thead>

          <tbody>
            {students.length &&
              students.map(student => (
                <tr key={student.id}>
                  <a href={`#/student/${student.id}`}>
                    <td>{student.firstName}</td>
                  </a>
                  <td>
                    <a href={`#/student/${student.id}`}>{student.lastName}</a>
                  </td>
                  <td>{student.gpa}</td>
                  <td>{student.email}</td>
                  <td>
                    {student.campusId && findCampusName(student.campusId)}
                  </td>
                  <td>
                    {' '}
                    <a href="#/students">
                      <span
                        onClick={() => deleteStudent(student.id)}
                        className="glyphicon glyphicon-trash"
                      />
                    </a>{' '}
                    <a href={`#/student/${student.id}/edit`}>
                      <span className="glyphicon glyphicon-pencil" />
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <Link to="/submitstudent">
          <button type="button" className="submit-btn">
            SUBMIT NEW STUDENT
          </button>
        </Link>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Students);
