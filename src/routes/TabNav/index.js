import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Screens
import Profile from '../../screens/Profile';

// Rotes
import PostsStackScreen from '../PostsStackScreen';
import AlbumsStackScreen from '../AlbumsStackScreen';

// Colors
import colors from '../../Assets/colors';

const Tab = createBottomTabNavigator();

const TabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Posts') {
            iconName = focused ? 'post' : 'post-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          } else if (route.name === 'Albums') {
            iconName = focused ? 'image-multiple' : 'image-multiple-outline';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.activeTintColor,
        inactiveTintColor: colors.inactiveTintColor,
        activeBackgroundColor: colors.primary,
        inactiveBackgroundColor: colors.inactiveBackgroundColor,
        style: {
          backgroundColor: colors.primary,
        },
      }}>
      <Tab.Screen name="Posts" component={PostsStackScreen} />
      <Tab.Screen name="Albums" component={AlbumsStackScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNav;
