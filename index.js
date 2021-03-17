/**
 * @format
 */

 import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { createStore,applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './src/services/reducers';
// import reduxDemoScreen from './src/screens/reduxDemoScreen';


// import createSagaMiddleware from 'redux-saga';
// import rootSaga from './src/services/reducers/rootSaga';
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
// sagaMiddleware.run(rootSaga);

const store = createStore(rootReducer, applyMiddleware(reduxThunk));


export default function DemoApp() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => DemoApp);

