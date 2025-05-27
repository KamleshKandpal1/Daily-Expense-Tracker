import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react'; // 👈 added
import {store, persistor} from './src/redux/store'; // 👈 updated import

import HomeScreen from './src/screens/HomeScreen.jsx';
import Transaction from './src/screens/Transaction.jsx';
import TransactionLists from './src/screens/TransactionLists.jsx';
// import EditTransaction from './src/screens/EditTransaction.jsx';
import './global.css';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GestureHandlerRootView style={{flex: 1}}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Transaction" component={Transaction} />
              <Stack.Screen
                name="Transaction Lists"
                component={TransactionLists}
              />
              {/* <Stack.Screen
                name="Edit Transaction"
                component={EditTransaction}
              /> */}
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </PersistGate>
    </Provider>
  );
}
