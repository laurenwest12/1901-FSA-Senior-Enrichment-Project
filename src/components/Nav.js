import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        students: state.products,
        campuses: state.campuses
    }
};

const Nav = ({location: {pathname}}) => {
    const links = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Campuses',
            path: '/campuses'
        },
        {
            title: 'Students',
            path: '/students'
        },
    ]
    return (
        <ul className = 'nav nav-pills'> 
        {
            links.map(link => (
                <li key = {link.path}>
                    <Link to = {link.path}  className =  {`nav-link${link.path === pathname ? ' active': ''}`}>{link.title}</Link>
                </li>
            ))
        }
        </ul>
    )
}

export default connect(mapStateToProps)(Nav)