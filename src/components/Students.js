import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getStudentsThunk} from '../store'

const mapDispatchToProps = (dispatch) => {
    return {
        getStudents: dispatch(getStudentsThunk())
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.students
    }
}

class Student extends Component {
    render () {
        const {students} = this.props
        return (
            <ul>
                {students && students.map(student => (
                    <li key = {student.firstName}>{student.firstName} {student.lastName}</li>
                ))}
            </ul>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Student)