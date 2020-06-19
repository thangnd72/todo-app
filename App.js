import React, { useState } from 'react';
import { NavigationContainer, useNavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen'
import CreateScreen from './src/screens/CreateScreen'
import ShowScreen from './src/screens/ShowScreen'
import EditScreen from './src/screens/EditScreen'
import { Provider } from 'react-redux';
import store from './src/store/store'

const Stack = createStackNavigator();


const App = () => {


  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Todo App"
            component={IndexScreen}
          />
          <Stack.Screen
            name="Add Todo"
            component={CreateScreen}
          />
          <Stack.Screen
            name="Show"
            component={ShowScreen}
          />
          <Stack.Screen
            name="Edit"
            component={EditScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


export default App;