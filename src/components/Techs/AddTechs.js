import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import './Techs.scss';
import { addTechs } from '../../redux/actions/techsAction';
import { setTechs as newSetTechs } from '../../redux/actions/techsAction';
import Techs from './Techs';

const AddTechs = ({ allTechs, addTechs, newSetTechs }) => {
  const [techs, setTechs] = useState({
    firstname: '',
    lastname: '',
  });

  useEffect(() => {
    newSetTechs();
  }, [newSetTechs]);

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
      {allTechs.techs?.map((tech) => (
        <Techs
          key={tech.id}
          id={tech.id}
          fname={tech.firstname}
          lname={tech.lastname}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  allTechs: state.techs,
});

export default connect(mapStateToProps, { addTechs, newSetTechs })(AddTechs);
