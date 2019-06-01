import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCampusThunk, getStudentsThunk } from '../store';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    campus: state.campus,
    students: state.students
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getCampus: dispatch(getCampusThunk(props.match.params.id)),
    getStudents: dispatch(getStudentsThunk())
  };
};

class Campus extends Component {
  render() {
    const { students } = this.props;
    const findStudents = id => {
      return students.filter(student => student.campusId === id);
    };

    const { campus } = this.props;
    return (
      <ul className="componentBody">
        {campus && (
          <div className="singleCampus">
            <div className="row align-items-center justify-content-center">
              <div className="col">
                {' '}
                <img
                  style={{ height: 300, width: 500 }}
                  src={campus.imageUrl}
                />
              </div>

              <div className="col">
                <h2 style={{ fontSize: 24 }}>
                  {campus.name && campus.name.toUpperCase()}{' '}
                  <a href={`#/campus/${campus.id}/edit`}>
                    <span className="glyphicon glyphicon-pencil" />
                  </a>
                </h2>{' '}
                <div style={{ fontSize: 12 }}>
                  <p className="font-italic">{campus.address}</p>
                  {campus.description}
                  <br />
                  <div className="font-weight-bold">Students</div>
                  <ul>
                    {findStudents(campus.id).length
                      ? findStudents(campus.id).map(student => (
                          <li key={student.firstName}>
                            <Link to={`/student/${student.id}`}>
                              {student.firstName} {student.lastName}
                            </Link>
                          </li>
                        ))
                      : 'No students attending'}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </ul>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campus);
