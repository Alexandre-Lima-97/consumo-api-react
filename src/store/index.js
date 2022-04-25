import { configureStore } from 'redux';

import rootReducer from './modules/rootReducer';

const store = configureStore(rootReducer);


export default store;
