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
                    <div>
                    
                    <div className = 'nav justify-content-center'>
                        <h2 className = 'font-weight-bold'>{campus.name}</h2>
                    </div>

                    
                    <div className = 'nav justify-content-center'>
                    <img style = {{height: 300, width: 500}} src = {campus.imageUrl}/>
                    </div>

                    <div className = 'nav justify-content-center'>
                    <p className = 'font-italic'>{campus.address}</p>
                    </div>

                    <div className = 'nav justify-content-center'>
                    {campus.description}
                    </div>

                    <br/>
                    
                    <div className = 'nav justify-content-center'>
                    <div className = 'font-weight-bold'>Students</div>
                    </div>

                    <div className = 'nav justify-content-center'>
                    <ul>
                        {findStudents(campus.id).length ? findStudents(campus.id).map(student => (
                            <li key = {student.firstName}>
                                <Link to = {`/student/${student.id}`}>{student.firstName} {student.lastName}</Link>
                            </li>
                        )) : 'No students attending'}
                    </ul>
                    </div>
                </div>}
            </ul>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Campus)