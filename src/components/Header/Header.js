import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__searchContainer'>
        <input
          type='search'
          className='header__input'
          placeholder='Search...'
        />
      </div>
      <div className='header__navigation'>
        <ul className='header__navigationItem'>
          <Link to='/alllogs'>
            <li>Check Logs</li>
          </Link>
          <Link to='/logs'>
            <li>Add Log</li>
          </Link>
          <Link to='/techs'>
            <li>Add Technicians</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
