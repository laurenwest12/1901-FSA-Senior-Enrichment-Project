import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getStudentsThunk} from '../store';
import {Link} from 'react-router-dom';

const mapDispatchToProps = (dispatch) => {
    return {
        getStudents: dispatch(getStudentsThunk())
    }
};

const mapStateToProps = (state) => {
    return {
        students: state.students
    }
};

class Students extends Component {
    render () {
        const {students} = this.props
        return (
            <ul>
                {students && students.map(student => (
                    <li key = {student.firstName}>
                    
                    <Link to = {`/student/${student.id}`}>{student.firstName} {student.lastName}</Link>
                    
                    </li>
                ))}
            </ul>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Students);