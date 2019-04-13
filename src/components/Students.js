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

    render () {
        const {students, campuses, deleteStudent} = this.props
        return (
            <div>
                <ul> {students && students.map(student => (
                    <li key = {student.firstName}>
                
                    <Link to = {`/student/${student.id}`}>{student.firstName} {student.lastName} </Link>
                    <button className = 'btn btn-danger btn-sm' type='submit' onClick = {() => deleteStudent(student.id)}>X</button>

                    </li>
                ))}
                </ul>

                <form onSubmit = {this.handleSubmit}>
                        <h4>Submit New Student</h4>
                        <label>First Name</label>
                        <input className =  'form-control' type = 'text' name = 'firstName' value = {this.state.firstName} onChange = {this.handleChange}/>

                        <label>Last Name</label>
                        <input className =  'form-control' type = 'text' name = 'lastName' value = {this.state.lastName} onChange = {this.handleChange}/>

                        <label>Email</label>
                        <input className =  'form-control' type = 'text' name = 'email' value = {this.state.email} onChange = {this.handleChange}/>

                        <label>Image Url</label>
                        <input className =  'form-control' type = 'text' name = 'imageUrl' value = {this.state.imageUrl} onChange = {this.handleChange}/>

                        <label>GPA</label>
                        <input className =  'form-control' type = 'text' name = 'gpa' value = {this.state.gpa} onChange = {this.handleChange}/>

                        <label>Campus</label>

                        <select className = 'form-control' onChange = {this.handleChange} name = 'campusId'>
                            <option value>None</option>
                            {campuses && campuses.map(campus => (
                                <option value = {campus.id} key = {campus.name}>{campus.name}</option>
                            ))}
                        </select>
                        <button type = 'submit' className = 'btn btn-primary'>Submit</button>

                </form>
            </div>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);