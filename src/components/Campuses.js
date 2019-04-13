import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCampusesThunk} from '../store';


const mapDispatchToProps = (dispatch) => {
  return {
    getCampuses: dispatch(getCampusesThunk())
  }
};

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
};

class Campuses extends Component {
  
  render() {
    const {campuses} = this.props
    return (
      <ul>
        {campuses && campuses.map(campus => (
          <li key = {campus.name}>
            <img src = {campus.imageUrl}/>
            {campus.name}
          
          </li>
        ))}
      </ul>
    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);