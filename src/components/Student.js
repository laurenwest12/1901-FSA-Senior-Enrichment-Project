import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getStudentThunk, getCampusesThunk} from '../store';
import {Link} from 'react-router-dom'

const mapStateToProps = (state) => {
    return {
        student: state.student,
        campuses: state.campuses
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        getStudent: dispatch(getStudentThunk(props.match.params.id)),
        getCampuses: dispatch(getCampusesThunk())
    }
};


class Student extends Component {
    render () {
        const {student, campuses} = this.props

        //helpers

        const findCampusName = (id) => {
            if (id){
                const campus = campuses.filter(campus => campus.id === id && campus)
                    if (campus.length) {
                        return campus[0].name
                    }
            }
        };

        const findCampusId = (id) => {
            if (id) {
                const campus = campuses.filter(campus => campus.id === id && campus)
                    if (campus.length) {
                        return campus[0].id
                    }
            }
        }

        return (
            <ul>
                {student &&
                    <div>
                        <img src = {student.imageUrl}/>
                        <br/>
                        {student.firstName} {student.lastName}
                        <br/>
                        {student.gpa}
                        <br/>
                        {student.email}
                        <br/>
                        {student.campusId && <Link to = {`/campus/${findCampusId(student.campusId)}`}>{findCampusName(student.campusId)}</Link>}
                    </div>
                }
            </ul>
        )
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Student);