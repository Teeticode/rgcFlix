/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  
} from 'react-native/Libraries/NewAppScreen';
import { createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeImg from './assets/icons/home.png';
import Login from './pages/Login';
import Home from './pages/Home';

const SwitchNavigator = createSwitchNavigator({
  loginStack:{
    screen:createStackNavigator({
      Login:Login
    },{
      defaultNavigationOptions:{
        headerShown:false,
        cardStyle:{
          padding:40,
          borderRadius:14
        }
      }
    })
  },
  homeStack: createBottomTabNavigator({
    home:{
      screen:createStackNavigator({
        Home:Home
      },{
        defaultNavigationOptions:{
          headerShown:false
        }
      }),
      navigationOptions:{
        tabBarIcon:({focused, tintColor})=>{
          return(
            <>
              {
                focused?(
                  <Image source={HomeImg} style={{marginTop:'15%', width:30,height:30, opacity:0.5}}/>
                ):(
                  <Image source={HomeImg} style={{marginTop:'15%', width:30,height:30}}/>
                )
              }
            </>
          )
        }
      }
    }
  })
})
const AppNavigator = createAppContainer(SwitchNavigator);
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View>
      <Login/>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
