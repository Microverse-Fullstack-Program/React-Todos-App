import React from 'react';
import {
  NavLink,
  Outlet,
} from 'react-router-dom';

const About = () => {
  const path = '/about';
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <NavLink to={`${path}/about-app`}>About App</NavLink>
        </li>
        <li>
          <NavLink to={`${path}/about-author`}>About Author</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default About;
