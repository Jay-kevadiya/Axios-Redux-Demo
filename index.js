/**
 * @format
 */

 import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './src/services/reducers/index';

// const store = createStore(rootReducer);

// export default function DemoApp() {
//     return (
//         <Provider store={store}>
//             <App />
//         </Provider>
//     );
// };

// AppRegistry.registerComponent('DemoApp', () => DemoApp);
AppRegistry.registerComponent(appName, () => App);

