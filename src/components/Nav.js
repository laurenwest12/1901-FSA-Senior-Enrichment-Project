import React from 'react';
import { Link } from 'react-router-dom';

const Nav = ({ location: { pathname } }) => {
  const links = [
    {
      title: 'HOME',
      path: '/'
    },
    {
      title: 'CAMPUSES',
      path: '/campuses'
    },
    {
      title: 'STUDENTS',
      path: '/students'
    }
  ];
  return (
    <div className="navcontainer">
      <nav className="navbar navbar-expand-md navbar-light fixed-top">
        <ul className="navbar-nav mr-auto">
          {links.map(link => (
            <li key={link.path}>
              <div className="nav-button">
                <Link
                  to={link.path}
                  className={`nav-link${
                    link.path === pathname ? ' active' : ''
                  }`}
                >
                  {link.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
