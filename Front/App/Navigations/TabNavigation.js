import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import Help from '../Screens/Help';
import Fav from '../Screens/Fav';
import Search from '../Screens/Search';
import Login from '../Screens/Login';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default function TabNavigation() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: 'bold',
                    textAlign: 'center',
                },
                tabBarStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeNavigation}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="search" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Help"
                component={Help}
                options={{
                    tabBarLabel: 'Help',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="help-buoy-outline" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Fav"
                component={Fav}
                options={{
                    tabBarLabel: 'Fav',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Login}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user-circle-o" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
