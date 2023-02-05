import React from 'react';
import { NavLink, useRouteMatch, Route } from 'react-router-dom';
import SinglePage from './SinglePage';

const About = () => {
  const { url, path } = useRouteMatch();
  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <NavLink to={`${url}/about-app`}>About App</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/about-author`}>About Author</NavLink>
        </li>
      </ul>
      <Route path={`${path}/:slug`}>
        <SinglePage />
      </Route>
    </div>
  );
};

export default About;
