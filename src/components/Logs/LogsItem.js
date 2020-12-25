import React from 'react';
import './Logs.scss';
import { MdDelete } from 'react-icons/md';

const LogsItem = () => {
  return (
    <div className='logsItem'>
      <div className='logsItem__text'>
        <p className={`logsItem__primaryText`}>Did Something At Work Station</p>
        <p className='logsItem__secondaryText'>
          <span className='logsItem__boldText'>ID #1</span> last updated By
          <span className='logsItem__boldText'> Sam Smith</span> on March 2nd
          2020, 12:00 PM
        </p>
      </div>
      <MdDelete className='logsItem__deleteBtn' />
    </div>
  );
};

export default LogsItem;
