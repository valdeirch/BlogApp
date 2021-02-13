import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

// Screens
import Login from '../../screens/Login';

// Routes
import TabNav from '../TabNav';

// Colors
import colors from '../../Assets/colors';

const MainStack = createStackNavigator();
const MainStackScreen = () => {
  const user = useSelector((state) => state.user?.currentUser);

  return (
    <MainStack.Navigator>
      {user ? (
        <MainStack.Screen
          options={{headerShown: false, backgroundColor: colors.background}}
          name="TabNav"
          component={TabNav}
        />
      ) : (
        <MainStack.Screen
          options={{headerShown: false, backgroundColor: colors.background}}
          name="Login"
          component={Login}
        />
      )}
    </MainStack.Navigator>
  );
};

export default MainStackScreen;
