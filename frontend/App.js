import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

// Import các màn hình của bạn
import HomeScreen from './src/screens/HomeScreen';
import StoresScreen from './src/screens/StoreScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import AccountScreen from './src/screens/AccountScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Trang chủ') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Cửa hàng') {
              iconName = focused ? 'storefront' : 'storefront-outline';
            } else if (route.name === 'Thông báo') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Tài khoản') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#FF5733', // Màu khi tab được chọn
          tabBarInactiveTintColor: 'gray',   // Màu khi tab không được chọn
        })}
      >
        <Tab.Screen name="Trang chủ" component={HomeScreen} />
        <Tab.Screen name="Cửa hàng" component={StoresScreen} />
        <Tab.Screen name="Thông báo" component={NotificationsScreen} />
        <Tab.Screen name="Tài khoản" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
