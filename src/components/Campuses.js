import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCampusesThunk, postCampusThunk} from '../store';
import {Link} from 'react-router-dom';


const mapDispatchToProps = (dispatch) => {
  return {
    getCampuses: dispatch(getCampusesThunk()),
    postCampus: (newCampus) => dispatch(postCampusThunk(newCampus))
  }
};

const mapStateToProps = (state) => {
  return {
    campuses: state.campuses
  }
};

class Campuses extends Component {
  constructor () {
    super () 
      this.state = {
          name: '',
          imageUrl: undefined,
          address: '',
          description: undefined,
        }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  };
  
  handleChange ({target}) {
      this.setState({
        [target.name]: target.value,
      })
  };

  handleSubmit (evt) {
    evt.preventDefault()
    this.props.postCampus(this.state)
  };

  render() {
    const {campuses} = this.props

    return (

      <div>
        <ul>
          {campuses && campuses.map(campus => (
            <li key = {campus.name}>
              <img src = {campus.imageUrl}/>
              <Link to = {`/campus/${campus.id}`}>{campus.name}</Link>
            
            </li>
          ))}
        </ul>

        <form onSubmit = {this.handleSubmit}>
          <h4>Submit New Campus</h4>
          <label>Name</label>
          <input className =  'form-control' type = 'text' name = 'name' value = {this.state.name} onChange = {this.handleChange}/>

          <label>Image Url</label>
          <input className =  'form-control' type = 'text' name = 'imageUrl' value = {this.state.imageUrl} onChange = {this.handleChange}/>

          <label>Address</label>
          <input className =  'form-control' type = 'text' name = 'address' value = {this.state.address} onChange = {this.handleChange}/>

          <label>Description</label>
          <input className =  'form-control' type = 'text' name = 'description' value = {this.state.description} onChange = {this.handleChange}/>

          <button type = 'submit' className = 'btn btn-primary'>Submit</button>

        </form>

      </div>

    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);