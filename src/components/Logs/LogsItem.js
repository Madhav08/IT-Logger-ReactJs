import React from 'react';
import { connect } from 'react-redux';
import './Logs.scss';
import { deleteLogs } from '../../redux/actions/logsAction';
import { MdDelete } from 'react-icons/md';

const LogsItem = ({ id, message, attention, date, tech, deleteLogs }) => {
  const handleDelete = (id) => {
    deleteLogs(id);
  };

  return (
    <div className='logsItem'>
      <div className='logsItem__text'>
        <p
          className={`logsItem__primaryText ${
            attention ? 'logsItem__dangerText' : 'logsItem__mainText'
          }`}
        >
          {message}
        </p>
        <p className='logsItem__secondaryText'>
          <span className='logsItem__boldText'>ID #{id}</span> last updated By
          <span className='logsItem__boldText'> {tech}</span> on {date}
        </p>
      </div>
      <MdDelete
        className='logsItem__deleteBtn'
        onClick={() => handleDelete(id)}
      />
    </div>
  );
};

export default connect(null, { deleteLogs })(LogsItem);
