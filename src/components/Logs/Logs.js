import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './Logs.scss';
import { getLogs } from '../../redux/actions/logsAction';
import LogsItem from './LogsItem';

const Logs = ({ log: { logs }, getLogs }) => {
  useEffect(() => {
    getLogs();
  });

  return (
    <div className='logs'>
      <h3 className='logs__heading'>System Logs</h3>
      {logs?.map((log) => (
        <LogsItem
          key={log.id}
          id={log.id}
          message={log.message}
          attention={log.attention}
          date={log.date}
          tech={log.tech}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  log: state.log,
});

export default connect(mapStateToProps, { getLogs })(Logs);
