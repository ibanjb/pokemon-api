import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import allReducers from './reducers';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  let store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk))
  );
  return { store };
};
