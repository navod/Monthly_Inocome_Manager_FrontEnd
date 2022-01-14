import React from 'react';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Navigation from './App/config/Navigation';
import AuthReducer from './App/store/reducers/auth';
import WhishlistReducer from './App/store/reducers/whishlist';
import Test from './App/screens/ModalView';

const rootReducer = combineReducers({
  auth: AuthReducer,
  whishlist: WhishlistReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
