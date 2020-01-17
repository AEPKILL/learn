import React from 'react';
import { Link } from 'react-router-dom';

const Nav: React.FunctionComponent = () => {
  return (
    <ul>
      <li>
        <Link to="/container">Container</Link>
      </li>
      <li>
        <Link to="/inheritance">inheritance</Link>
      </li>
      <li>
        <Link to="/rebind">rebind</Link>
      </li>
      <li>
        <Link to="/middleware">middleware</Link>
      </li>
    </ul>
  );
};

export { Nav };
