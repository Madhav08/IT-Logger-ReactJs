import { SET_TECHS, ADD_TECHS, REMOVE_TECH } from '../types';

export const setTechs = () => async (dispatch) => {
  try {
    const res = await fetch('/techs');
    const data = await res.json();

    dispatch({
      type: SET_TECHS,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const addTechs = (tech) => async (dispatch) => {
  try {
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECHS,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const removeTechs = (id) => async (dispatch) => {
  try {
    await fetch(`/techs/${id}`, {
      method: 'DELETE',
    });

    dispatch({
      type: REMOVE_TECH,
      payload: id,
    });
  } catch (err) {
    console.log(err.message);
  }
};
