import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
  logs: [
    {
      id: 1,
      message: 'Changed hard Drive on work station 005',
      attention: false,
      date: '11-12-2020',
      tech: 'Sam Smith',
    },
    {
      id: 2,
      message: 'WorkStation 007 not posting',
      attention: true,
      date: '19-12-2020',
      tech: 'John Doe',
    },
    {
      id: 2,
      message: 'Changed memory on workstation 2001',
      attention: false,
      date: '21-12-2020',
      tech: 'Sara Wiliams',
    },
  ],
  techs: [
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
    },
    {
      id: 2,
      firstname: 'Sara',
      lastname: 'Williams',
    },
    {
      id: 3,
      firstname: 'Sam',
      lastname: 'Smith',
    },
  ],
};
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
