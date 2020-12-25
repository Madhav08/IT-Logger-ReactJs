import React from 'react';
import './Logs.scss';
import LogsItem from './LogsItem';

const Logs = () => {
  return (
    <div className='logs'>
      <h3 className='logs__heading'>System Logs</h3>
      <LogsItem />
      <LogsItem />
      <LogsItem />
      <LogsItem />
      <LogsItem />
      <LogsItem />
      <LogsItem />
      <LogsItem />
      <LogsItem />
    </div>
  );
};

export default Logs;
