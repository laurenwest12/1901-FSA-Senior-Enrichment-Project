import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCampusThunk, getStudentsThunk} from '../store';
import {Link} from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        campus: state.campus,
        students: state.students
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        getCampus: dispatch(getCampusThunk(props.match.params.id)),
        getStudents: dispatch(getStudentsThunk())
    }
};

class Campus extends Component {
    render () {
        const {students} = this.props
        const findStudents = (id) => {
            return students.filter(student => student.campusId === id)
        }

        const {campus} = this.props
        return ( 
            <ul>
                {campus && 
                <div>{campus.name} 
                    <br/>
                    <img src = {campus.imageUrl}/>
                    <br/>
                    {campus.address}
                    <br/>
                    {campus.description}
                    <br/>
                    Students
                    <ul>
                        {findStudents(campus.id).length ? findStudents(campus.id).map(student => (
                            <li key = {student.firstName}>
                                <Link to = {`/student/${student.id}`}>{student.firstName} {student.lastName}</Link>
                            </li>
                        )) : 'No students attending'}
                    </ul>
                </div>}
            </ul>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campus)