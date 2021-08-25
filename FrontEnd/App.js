import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Login from './component/Login';
import Main from './component/Main';
import Com from './component/Com';
import Fetch from './component/Fetch';

import Register from './component/Register';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      //  <View>
      //    <Login/>  

      //    {/* <Register/>   */}
      //   {/* <Com/>  */}
      //    {/* <Main/>  */}
      //   {/* <Fetch/> */}

      //  </View>

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Fetch" component={Fetch} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
