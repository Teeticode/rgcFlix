import React from 'react';
import { Node } from '@babel/core';
import {createAppContainer, createSwitchNavigator}  from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import Home from './pages/Home';
import Login from './pages/Login';
import { Image } from 'react-native';
import HomeImg from './assets/icons/home.png'

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
    return(
      <>
        <AppNavigator/>
      </>
      
    )
}

export default App;