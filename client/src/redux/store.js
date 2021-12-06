import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const sagaMiddleware = createSagaMiddleware();
//const middlewares = [sagaMiddleware];

// const bindMiddleware = middleware => {
// //   if (process.env.NODE_ENV !== 'production') {
// //     const { composeWithDevTools } = require('redux-devtools-extension');
// //     return composeWithDevTools(applyMiddleware(...middleware));
// //   }
//   return applyMiddleware(...middleware);
// };

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;