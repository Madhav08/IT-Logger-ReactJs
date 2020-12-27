import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Techs.scss';
import { addTechs } from '../../redux/actions/techsAction';

const AddTechs = ({ addTechs }) => {
  const [techs, setTechs] = useState({
    firstname: '',
    lastname: '',
  });

  const onChange = (e) => {
    setTechs({ ...techs, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTechs(techs);
    setTechs({ firstname: '', lastname: '' });
  };

  return (
    <div className='addTechs'>
      <form className='form' onSubmit={onSubmit}>
        <h3 className='formHeading'>Add Technician</h3>
        <input
          type='text'
          className='form__input'
          placeholder='First Name'
          name='firstname'
          value={techs.firstname}
          onChange={onChange}
        />
        <input
          type='text'
          className='form__input'
          placeholder='Last Name'
          name='lastname'
          value={techs.lastname}
          onChange={onChange}
        />

        <input type='submit' value='Add' className='form__submitBtn' />
      </form>
    </div>
  );
};

export default connect(null, { addTechs })(AddTechs);
