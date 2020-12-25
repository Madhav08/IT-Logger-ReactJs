import React from 'react';
import './Logs.scss';

const AddLogs = () => {
  return (
    <div className='addLogs'>
      <form className='form'>
        <h3 className='formHeading'>Add Logs</h3>
        <input
          type='text'
          className='form__input'
          placeholder='Name'
          name='name'
        />
        <input
          type='text'
          className='form__input'
          placeholder='Message'
          name='message'
        />
        <input type='date' placeholder='Select Date' className='form__input' />
        <div className='form__inputRadio'>
          <label htmlFor='attention'>Attention Required: </label>{' '}
          &nbsp;&nbsp;&nbsp;
          <input type='radio' value='true' name='attention' />
          &nbsp;&nbsp;&nbsp;Yes &nbsp;&nbsp;&nbsp;
          <input type='radio' value='true' name='attention' />
          &nbsp;&nbsp;&nbsp;No
        </div>
        <input type='submit' value='Add Log' className='form__submitBtn' />
      </form>
    </div>
  );
};

export default AddLogs;
