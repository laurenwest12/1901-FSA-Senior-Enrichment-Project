import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getStudentsThunk, getCampusesThunk, postStudentThunk, deleteStudentThunk} from '../store';
import {Link} from 'react-router-dom';

const mapDispatchToProps = (dispatch) => {
    return {
        getStudents: dispatch(getStudentsThunk()),
        getCampuses: dispatch(getCampusesThunk()),
        postStudent: (newStudent) => dispatch(postStudentThunk(newStudent)),
        deleteStudent: (id) => dispatch(deleteStudentThunk(id))
    }
};

const mapStateToProps = (state) => {
    return {
        students: state.students,
        campuses: state.campuses
    }
};

class Students extends Component {
    constructor() {
        super () 
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            imageUrl: undefined,
            gpa: undefined,
            campusId: undefined
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange ({target}) {
        this.setState({
          [target.name]: target.value,
        })
    };

    handleSubmit (evt) {
        evt.preventDefault()
        this.props.postStudent(this.state)
    };

    handleClear() {
        this.setState({
          firstName: '',
          lastName: '',
          email: '',
          imageUrl: '',
          gpa: '',
        })
      }

    render () {
        const {students, campuses, deleteStudent} = this.props
        return (
            <div>
                <ul className = 'list-group'> {students && students.map(student => (                    
                    <li className = 'list-group-item' key = {student.firstName}>

                        <div className = 'nav justify-content-center'>
                            <Link to = {`/student/${student.id}`}><h5>{student.firstName} {student.lastName}</h5></Link>
                            <button className = 'btn btn-danger btn-sm' type='submit' onClick = {() => deleteStudent(student.id)}>X</button>
                        </div>
                        <div className = 'nav justify-content-center'>
                            <img className = 'rounded-circle' style = {{height: 200, width: 200}} src = {student.imageUrl}/>
                            <br/>
                        </div>
                    </li>
                ))}
                </ul>
                
                <br/>

                <ul className = 'list-group'>
                <form onSubmit = {this.handleSubmit}>
                        <h2 className = 'nav justify-content-center'>Submit New Student</h2>
                        
                        <br/>

                        <li className = 'list-group-item'>
                        <label>First Name</label>
                        <input className =  'form-control' type = 'text' name = 'firstName' value = {this.state.firstName} placeholder = 'First Name' onChange = {this.handleChange}/>
                        </li> 

                        <li className = 'list-group-item'>
                        <label>Last Name</label>
                        <input className =  'form-control' type = 'text' name = 'lastName' value = {this.state.lastName} placeholder = 'Last Name' onChange = {this.handleChange}/>
                        </li>

                        <li className = 'list-group-item'>
                        <label>Email</label>
                        <input className =  'form-control' type = 'text' name = 'email' value = {this.state.email} placeholder = 'E-mail' onChange = {this.handleChange}/>
                        </li>

                        <li className = 'list-group-item'>
                        <label>Image Url</label>
                        <input className =  'form-control' type = 'text' name = 'imageUrl' value = {this.state.imageUrl} placeholder = 'Student Image Url' onChange = {this.handleChange}/>
                        </li>

                        <li className = 'list-group-item'>
                        <label>GPA</label>
                        <input className =  'form-control' type = 'text' name = 'gpa' value = {this.state.gpa} placeholder = 'GPA' onChange = {this.handleChange}/>
                        </li>

                        <li className = 'list-group-item'>
                        <label>Campus</label>

                        <select className = 'form-control' onChange = {this.handleChange} name = 'campusId'>
                            <option value>None</option>
                            {campuses && campuses.map(campus => (
                                <option value = {campus.id} key = {campus.name}>{campus.name}</option>
                            ))}
                        </select>
                        </li>
                        
                        <button style={{width: 500}} type = 'submit' className = 'btn btn-primary'>Submit</button>
                        <button style={{width: 500}} type = 'button' className = 'btn btn-danger' onClick = {() => this.handleClear()}>Cancel</button>

                </form>
                </ul>
            </div>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);