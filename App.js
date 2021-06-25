import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import DataListComponent from './src/DataListComponent';
import DetailedDataComponent from './src/DetailedDataComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import reactNativeSplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    setTimeout(() => reactNativeSplashScreen.hide(), 1000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="DataListComponent">
        <Stack.Screen name="DataListComponent" component={DataListComponent} />
        <Stack.Screen name="DetailedDataComponent" component={DetailedDataComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;