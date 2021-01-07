import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  HomeScreen,
  CustomWalletScreen,
} from '../screens';
import {
  NAVIGATION_TO_HOME_SCREEN,
  NAVIGATION_TO_DETAIL_SCREEN,
} from './routes';

const Stack = createStackNavigator();

const StackNavigator = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION_TO_HOME_SCREEN}
        component={HomeTabs}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name={NAVIGATION_TO_DETAIL_SCREEN}
        component={CustomWalletScreen}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function Prices() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Prices!</Text>
    </View>
  );
}

function Exchange() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Exchange!</Text>
    </View>
  );
}

function MyOrders() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>MyOrders!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator initialRouteName={NAVIGATION_TO_HOME_SCREEN}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Portfolio') {
              iconName = focused
                ? 'list'
                : 'list';
            } else if (route.name === 'MyOrders') {
              iconName = focused ? 'clock-o' : 'clock-o';
            } else if(route.name === 'Prices') {
              iconName = focused ? 'line-chart' : 'line-chart';
            } else if(route.name === 'Profile') {
              iconName = focused ? 'user' : 'user';
            } else if(route.name === 'Exchange') {
              iconName = focused ? 'home' : 'home';
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Portfolio" component={HomeScreen} />
        <Tab.Screen name="Prices" component={Prices} />
        <Tab.Screen name="Exchange" component={Exchange} />
        <Tab.Screen name="MyOrders" component={MyOrders} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
  );
}

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator/> 
    </NavigationContainer>
  );
}

export default RootNavigator;
