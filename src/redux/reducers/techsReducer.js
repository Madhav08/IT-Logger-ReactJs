import { ADD_TECHS, SET_TECHS } from '../types';

const initialState = {
  techs: null,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_TECHS:
      return {
        ...state,
        techs: action.payload,
      };
    case ADD_TECHS: {
      return {
        ...state,
        techs: [...state.techs, action.payload],
      };
    }
    default:
      return {
        ...state,
      };
  }
};
