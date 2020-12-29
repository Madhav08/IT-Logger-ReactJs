import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setTechs } from '../../redux/actions/techsAction';
import { addLogs } from '../../redux/actions/logsAction';
import './Logs.scss';

const AddLogs = ({ techs: { techs }, setTechs, addLogs }) => {
  const [logs, setLogs] = useState({
    message: '',
    tech: 'DEFAULT',
    attention: false,
    date: new Date().toLocaleString(),
  });

  useEffect(() => {
    setTechs();
  });

  const onChange = (e) => {
    setLogs({ ...logs, [e.target.name]: e.target.value });
  };

  const onCheckboxChange = (e) => {
    setLogs({ ...logs, attention: !logs.attention });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addLogs(logs);
    setLogs({
      message: '',
      tech: 'DEFAULT',
      attention: false,
      date: new Date().toLocaleString(),
    });
  };

  return (
    <div className='addLogs'>
      <form className='form' onSubmit={handleSubmit}>
        <h3 className='formHeading'>Add Logs</h3>
        <input
          type='text'
          className='form__input'
          placeholder='Message'
          name='message'
          value={logs.message}
          onChange={onChange}
        />
        <div className='options'>
          <select
            value={logs.tech}
            name='tech'
            className='form__input'
            onChange={onChange}
            defaultValue={'DEFAULT'}
          >
            <option value='DEFAULT' disabled>
              --- Name of Technician ---
            </option>
            {techs?.map((tech) => (
              <option
                value={`${tech.firstname} ${tech.lastname}`}
                key={tech.id}
              >
                {tech.firstname} {tech.lastname}
              </option>
            ))}
          </select>
        </div>

        <div className='form__inputCheckbox'>
          <label htmlFor='attention'>
            Attention Required :
            <input
              name='attention'
              type='checkbox'
              onChange={onCheckboxChange}
              value={true}
            />
          </label>
        </div>
        <input type='submit' value='Add Log' className='form__submitBtn' />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  techs: state.techs,
});

export default connect(mapStateToProps, { setTechs, addLogs })(AddLogs);
