import { SET_LOGS, SET_ERROR } from '../types';

const initialState = {
  logs: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGS:
      return {
        ...state,
        logs: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
