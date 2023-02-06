import React from 'react';
import {
  NavLink,
  Route,
  Routes,
} from 'react-router-dom';
import SinglePage from './SinglePage';

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
      <Routes>
        <Route path={`${path}/:slug`} element={<SinglePage />} />
      </Routes>
    </div>
  );
};

export default About;
