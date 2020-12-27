import { SET_LOGS, SET_ERROR } from '../types';

// Get Logs from Server
export const getLogs = () => async (dispatch) => {
  try {
    const res = await fetch('/logs');
    const data = res.json();

    dispatch({
      type: SET_LOGS,
      payload: data,
    });
  } catch (error) {}
};
