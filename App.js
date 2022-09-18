import React from 'react';
import NavigationRouter from './navigations/NavigationRouter';

import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import reducer from './redux/RootReducers';
const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationRouter />
    </Provider>
  );
};

export default App;
