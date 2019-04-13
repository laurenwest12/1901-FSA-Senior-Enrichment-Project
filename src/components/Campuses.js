import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCampusesThunk, postCampusThunk, deleteCampusThunk} from '../store';
import {Link} from 'react-router-dom';


const mapDispatchToProps = (dispatch) => {
  return {
    getCampuses: dispatch(getCampusesThunk()),
    postCampus: (newCampus) => dispatch(postCampusThunk(newCampus)),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id))
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
          imageUrl: '',
          address: '',
          description: '',
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

  handleClear() {
    this.setState({
      name: '',
      imageUrl: '',
      address: '',
      description: '',
    })
  }

  render() {
    const {campuses, deleteCampus} = this.props

    return (

      <div>
        <ul className = 'list-group'>
          {campuses && campuses.map(campus => (
              <li className = 'list-group-item' key = {campus.name}>
              <div className = 'row'>
              <div className='col'>
                <img src = {campus.imageUrl} style={{width: 500, height: 300}}/>
              </div>
              <div className = 'col' >
                <h5><Link to = {`/campus/${campus.id}`}>{campus.name} </Link>
                <button className = 'btn btn-danger btn-sm' type='submit' onClick = {() => deleteCampus(campus.id)}>X</button></h5>
                <p className = 'font-weight-bold'>{campus.address}</p>
                {campus.description}
              </div>
              </div>
            
            </li>
          ))}
        </ul>
        
        <br/>

        <ul className = 'list-group'>
        <form onSubmit = {this.handleSubmit}>
          <h2 className='nav justify-content-center'>Submit New Campus</h2>
        
          <br/>

          <li className='list-group-item'>
            <label>Name</label>
            <input className =  'form-control' type = 'text' name = 'name' value = {this.state.name} onChange = {this.handleChange} placeholder = 'Campus Name'/>   
          </li>

          
          <li className='list-group-item'>
          <label>Image Url</label>
          <input className =  'form-control' type = 'text' name = 'imageUrl' value = {this.state.imageUrl} onChange = {this.handleChange} placeholder = 'Campus Image Url (300 x 500)'/>
          </li>

          <li className='list-group-item'>
          <label>Address</label>
          <input className =  'form-control' type = 'text' name = 'address' value = {this.state.address} onChange = {this.handleChange} placeholder = 'City, State'/>
          </li>

          <li className='list-group-item'>
          <label>Description</label>
          <textarea className =  'form-control' type = 'text' name = 'description' value = {this.state.description} onChange = {this.handleChange} placeholder = 'Description'/>
          </li>
          
          <ul className='nav justify-content-center'>
          <button style={{width: 500}} type = 'submit' className = 'btn btn-primary'>Submit</button> 
          <button style={{width: 500}} type = 'button' className = 'btn btn-danger' onClick = {() => this.handleClear()}>Cancel</button>
          </ul>

        </form>
        </ul>

      </div>

    )
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Campuses);