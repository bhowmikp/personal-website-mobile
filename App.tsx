import React from 'react';

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

import {Test} from './src/Test';
import {Best} from './src/Best';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Test"
            component={Test}
            options={{title: 'First Screen'}}
          />
          <Stack.Screen name="Best" component={Best} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;
