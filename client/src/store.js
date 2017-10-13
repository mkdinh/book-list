// Import dependencies
//--------------------------------------------------------

import { createStore, applyMiddleware } from 'redux';
import { createLogger as logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './utils/Redux/reducers';

// create global store object
//--------------------------------------------------------

// apply middleware to redux app
const midware = applyMiddleware(thunk, logger());

// create store variable with reducers and midware
const store = createStore(reducers, midware);

export default store;