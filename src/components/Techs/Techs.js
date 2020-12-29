import React from 'react';
import { connect } from 'react-redux';
import './Techs.scss';
import { removeTechs } from '../../redux/actions/techsAction';
import { MdDelete } from 'react-icons/md';

const Techs = ({ fname, lname, id, removeTechs }) => {
  const handleDelete = (id) => {
    removeTechs(id);
  };

  return (
    <>
      <div className='techs'>
        <div className='techs__container'>
          <p className='techs__name'>
            {fname} {lname}
          </p>
          <MdDelete
            className='techs__deleteBtn'
            onClick={() => handleDelete(id)}
          />
        </div>
      </div>
    </>
  );
};

export default connect(null, { removeTechs })(Techs);
