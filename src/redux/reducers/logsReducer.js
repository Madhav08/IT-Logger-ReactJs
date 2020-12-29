import { SET_LOGS, ADD_LOGS, REMOVE_LOGS } from '../types';

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
    case ADD_LOGS: {
      return {
        ...state,
        logs: [...state.logs, action.payload],
      };
    }
    case REMOVE_LOGS:
      return {
        ...state,
        logs: state.logs.filter((log) => log.id !== action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};
