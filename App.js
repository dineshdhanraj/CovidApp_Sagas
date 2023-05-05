import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './Reducers/reducers';
import CovidApp from './Components/CovidApp';
import { calls } from './Sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  enhancers: [applyMiddleware(sagaMiddleware)],
});

sagaMiddleware.run(calls);

export default function App() {
  return (
    <Provider store={store}>
      <CovidApp />
    </Provider>
  );
}
