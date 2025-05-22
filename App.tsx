import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import HomeScreen from './src/screens/HomeScreen.jsx';
import Transaction from './src/screens/Transaction.jsx';
import TransactionLists from './src/screens/TransactionLists.jsx';
import './global.css';
import {Provider} from 'react-redux';
import {store} from './src/redux/store.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Transaction" component={Transaction} />
            <Stack.Screen
              name="Transaction Lists"
              component={TransactionLists}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
}
