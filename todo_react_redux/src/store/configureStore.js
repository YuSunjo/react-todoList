import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducer/index';

const configureStore = createStore(reducer, composeWithDevTools());

export default configureStore;
