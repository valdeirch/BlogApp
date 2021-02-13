import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import Posts from '../../screens/Posts';
import PostView from '../../screens/PostView';

// Colors
import colors from '../../Assets/colors';

const Stack = createStackNavigator();
const PostsStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerTitle: 'Posts',
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
        name="Posts"
        component={Posts}
      />
      <Stack.Screen
        options={{
          headerTintColor: colors.headerButton,
          headerTitle: 'Post View',
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
        name="PostView"
        component={PostView}
      />
    </Stack.Navigator>
  );
};

export default PostsStackScreen;
