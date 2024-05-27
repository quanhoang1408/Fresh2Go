import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/Navigation';
import DishesScreen from './src/screens/DishesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Quay lại"
          component={BottomTabNavigator}
          options={{ headerShown: false }} // Ẩn header của Stack Navigator
        />
        <Stack.Screen name="Món ăn" component={DishesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
