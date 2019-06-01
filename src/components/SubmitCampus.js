import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postCampusThunk } from '../store';

const mapDispatchToProps = dispatch => {
  return {
    postCampus: newCampus => dispatch(postCampusThunk(newCampus))
  };
};

class SubmitCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      imageUrl: '',
      address: '',
      description: ''
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
    this.props.postCampus(this.state);
  }

  handleClear() {
    this.setState({
      name: '',
      imageUrl: '',
      address: '',
      description: ''
    });
  }

  render() {
    return (
      <div className="componentBody">
        <ul className="list-group">
          <form onSubmit={this.handleSubmit}>
            <h2 className="nav justify-content-center">SUBMIT NEW CAMPUS</h2>

            <br />

            <li className="list-group-item">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                placeholder="Campus Name"
              />
            </li>

            <li className="list-group-item">
              <label>Image Url</label>
              <input
                className="form-control"
                type="text"
                name="imageUrl"
                value={this.state.imageUrl}
                onChange={this.handleChange}
                placeholder="Campus Image Url (300 x 500)"
              />
            </li>

            <li className="list-group-item">
              <label>Address</label>
              <input
                className="form-control"
                type="text"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
                placeholder="City, State"
              />
            </li>

            <li className="list-group-item">
              <label>Description</label>
              <textarea
                className="form-control"
                type="text"
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                placeholder="Description"
                style={{ height: 100 }}
              />
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
  null,
  mapDispatchToProps
)(SubmitCampus);
