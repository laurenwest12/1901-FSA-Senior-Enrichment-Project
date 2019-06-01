import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCampusesThunk, postStudentThunk } from '../store';

const mapDispatchToProps = dispatch => {
  return {
    getCampuses: dispatch(getCampusesThunk()),
    postStudent: newStudent => dispatch(postStudentThunk(newStudent))
  };
};

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  };
};

class SubmitStudent extends Component {
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
    const { campuses } = this.props;

    return (
      <div className="componentBody">
        <ul className="list-group">
          <form onSubmit={this.handleSubmit}>
            <h2 className="nav justify-content-center">SUBMIT NEW STUDENT </h2>

            <br />

            <li className="list-group-item">
              <label>First Name</label>
              <input
                className="form-control"
                type="text"
                name="firstName"
                value={this.state.firstName}
                placeholder="First Name"
                onChange={this.handleChange}
              />
            </li>

            <li className="list-group-item">
              <label>Last Name</label>
              <input
                className="form-control"
                type="text"
                name="lastName"
                value={this.state.lastName}
                placeholder="Last Name"
                onChange={this.handleChange}
              />
            </li>

            <li className="list-group-item">
              <label>Email</label>
              <input
                className="form-control"
                type="text"
                name="email"
                value={this.state.email}
                placeholder="E-mail"
                onChange={this.handleChange}
              />
            </li>

            <li className="list-group-item">
              <label>Image Url</label>
              <input
                className="form-control"
                type="text"
                name="imageUrl"
                value={this.state.imageUrl}
                placeholder="Student Image Url (500px x 350px)"
                onChange={this.handleChange}
              />
            </li>

            <li className="list-group-item">
              <label>GPA</label>
              <input
                className="form-control"
                type="text"
                name="gpa"
                value={this.state.gpa}
                placeholder="GPA"
                onChange={this.handleChange}
              />
            </li>

            <li className="list-group-item">
              <label>Campus</label>

              <select
                className="form-control"
                onChange={this.handleChange}
                name="campusId"
              >
                <option value>None</option>
                {campuses &&
                  campuses.map(campus => (
                    <option value={campus.id} key={campus.name}>
                      {campus.name}
                    </option>
                  ))}
              </select>
            </li>

            <ul className="nav justify-content-center">
              <button
                style={{ width: 500 }}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
              <button
                style={{ width: 500 }}
                type="button"
                className="btn btn-danger"
                onClick={() => this.handleClear()}
              >
                Clear
              </button>
            </ul>
          </form>
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubmitStudent);
