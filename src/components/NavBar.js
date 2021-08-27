import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = () => { // eslint-disable-line
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];

  return (
    <nav className={styles.navBar}>
      <div id={styles.title}>
        <h1>Math Magicians</h1>
      </div>
      <ul>
        {links.map((link) => { // eslint-disable-line
          return (
            <li key={link.id}>
              <NavLink to={link.path} activeClassName={styles.activelink}>
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
