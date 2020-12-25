import React from 'react';
import './Techs.scss';

const AddTechs = () => {
  return (
    <div className='addTechs'>
      <form className='form'>
        <h3 className='formHeading'>Add Technician</h3>
        <input
          type='text'
          className='form__input'
          placeholder='First Name'
          name='fname'
        />
        <input
          type='text'
          className='form__input'
          placeholder='Last Name'
          name='lname'
        />

        <input type='submit' value='Add' className='form__submitBtn' />
      </form>
    </div>
  );
};

export default AddTechs;
