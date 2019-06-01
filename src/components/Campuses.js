import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCampusesThunk, postCampusThunk, deleteCampusThunk } from '../store';
import { Link } from 'react-router-dom';

const mapDispatchToProps = dispatch => {
  return {
    getCampuses: dispatch(getCampusesThunk()),
    postCampus: newCampus => dispatch(postCampusThunk(newCampus)),
    deleteCampus: id => dispatch(deleteCampusThunk(id))
  };
};

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  };
};

class Campuses extends Component {
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
    const { campuses, deleteCampus } = this.props;

    return (
      <div className="componentBody">
        <ul className="campus-list">
          {campuses &&
            campuses.map(campus => (
              <li key={campus.id}>
                <div className="list-container">
                  <img src={campus.imageUrl} className="list-image" />
                  <div className="list-overlay overlay-top">
                    <div className="list-text">
                      <div>
                        <a href={`/#/campus/${campus.id}`}>
                          {campus.name.toUpperCase()}
                        </a>
                      </div>
                      <div>
                        <a href="#/campuses">
                          <span
                            onClick={() => deleteCampus(campus.id)}
                            className="glyphicon glyphicon-trash"
                          />
                        </a>{' '}
                        <a href={`#/campus/${campus.id}/edit`}>
                          <span className="glyphicon glyphicon-pencil" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <Link to="/submitcampus">
          <button type="button" className="submit-btn">
            SUBMIT NEW CAMPUS
          </button>
        </Link>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Campuses);
