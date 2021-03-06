import { SET_LOGS, ADD_LOGS, REMOVE_LOGS } from '../types';

// Get Logs from Server
export const getLogs = () => async (dispatch) => {
  try {
    const res = await fetch('/logs');
    const data = await res.json();

    dispatch({
      type: SET_LOGS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addLogs = (logs) => async (dispatch) => {
  try {
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(logs),
      headers: {
        'content-type': 'application/json',
      },
    });
    const data = res.json();

    dispatch({
      type: ADD_LOGS,
      payload: data,
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteLogs = (logId) => async (dispatch) => {
  try {
    await fetch(`/logs/${logId}`, {
      method: 'DELETE',
    });

    dispatch({
      type: REMOVE_LOGS,
      payload: logId,
    });
  } catch (err) {
    console.log(err.message);
  }
};
