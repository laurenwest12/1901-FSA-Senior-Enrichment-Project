import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCampusThunk, editCampusThunk } from '../store';

const mapStateToProps = state => {
  return {
    campus: state.campus
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCampus: id => dispatch(getCampusThunk(id)),
    editCampus: (id, campus) => dispatch(editCampusThunk(id, campus))
  };
};

class EditCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      address: '',
      description: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCampus(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.campus !== prevProps.campus) {
      this.setState({
        name: this.props.campus.name,
        imageUrl: this.props.campus.imageUrl,
        address: this.props.campus.address,
        description: this.props.campus.description
      });
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.editCampus(this.props.campus.id, this.state);
    this.props.history.push(`/campus/${this.props.campus.id}`);
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
            <h2 className="nav justify-content-center">EDIT CAMPUS</h2>

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
  mapStateToProps,
  mapDispatchToProps
)(EditCampus);
