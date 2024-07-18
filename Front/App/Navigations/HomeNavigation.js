import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { TransitionPresets } from '@react-navigation/stack';
import HomeScreen from '../Screens/Home'; // Ensure this is the correct path
import PlaceDetail from '../Components/PlaceDetail/PlaceDetail';
import Login from '../Screens/Login';
import Profile from '../Screens/Profile';
import EditProfile from '../Screens/EditProfile';
import ResetPassword from '../Screens/ResetPassword';
import AboutMe from '../Screens/AboutMe';
import Activities from '../Screens/Activities';
import GasStationPage from '../Screens/GasStationPage'; // Ensure this is the correct path
import RestaurantPage from '../Screens/RestaurantPage'; // Ensure this is the correct path
import CafePage from '../Screens/CafePage'; // Ensure this is the correct path

const Stack = createStackNavigator();

export default function HomeNavigation() {
  const isAndroid = true;

  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        ...(isAndroid && TransitionPresets.ModalPresentationIOS),
      }}
    >
      <Stack.Screen
        name="home-screen"
        options={{ headerShown: false }}
        component={HomeScreen}
      />
      <Stack.Screen
        name="place-detail"
        options={{ title: "" }}
        component={PlaceDetail}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="AboutMe" component={AboutMe} />
      <Stack.Screen name="Activities" component={Activities} />
      <Stack.Screen name="GasStationPage" component={GasStationPage} />
      <Stack.Screen name="RestaurantPage" component={RestaurantPage} />
      <Stack.Screen name="CafePage" component={CafePage} />
    </Stack.Navigator>
  );
}
