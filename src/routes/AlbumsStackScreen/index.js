import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Albums from '../../screens/Albums';
import PhotosView from '../../screens/PhotosView';

// Colors
import colors from '../../Assets/colors';

const Stack = createStackNavigator();
const AlbumsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTintColor: colors.headerButton,
          headerTitle: 'Albums',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.headerTitle,
          },
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0,
          },
          backgroundColor: colors.background,
        }}
        name="Albums"
        component={Albums}
      />
      <Stack.Screen
        options={{
          headerTintColor: colors.headerButton,
          headerTitle: 'Photos',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: colors.headerTitle,
          },
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0,
          },
          backgroundColor: colors.background,
        }}
        name="PhotosView"
        component={PhotosView}
      />
    </Stack.Navigator>
  );
};

export default AlbumsStackScreen;
