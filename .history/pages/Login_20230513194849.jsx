
import React, { useState } from 'react'
import { StyleSheet,View,Text, Touchable, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import camera from '../assets/images/camera.jpg'
import { TextInput } from 'react-native-gesture-handler'
import { useEffect } from 'react'
import { Keyboard } from 'react-native'

export default function Login({navigation}) {
  const [username, setUserName] = useState('');
  const [keyboardStatus, setKeyboardStatus] = useState('');

  
  return (
   
       
          <ScrollView 
          
          showsVerticalScrollIndicator={false}
        >
          <ImageBackground 
            source={camera}
            style={{height:Dimensions.get('window').height/2.5}}
            blurRadius={5}>
              <View
                style={styles.brandContainer}
              >
                <Image
                  source={require('../assets/icons/tv.png')}
                  style={{width:80,height:80}}
                 />
              </View>
          </ImageBackground>
          {/**Bottom View */}
          <View style={styles.bottomView}>
            {/**Welcome View */}
            <View
              style={{padding:30}}
            >
                <Text style={{color:'#4632A1', fontSize:34}}>Welcome</Text>
                <Text>
                  Don't have an account?
                  <Text style={{color:'darkblue', fontStyle:'italic'}}>
                    {' '}
                    Register now
                  </Text>
                </Text> 
                {/***Form Inputs */}
                <View style={{marginTop: 40}}>
                  <View>
                    <View
                      style={{
                        borderColor:'gray', 
                        borderWidth:1, 
                        borderRadius:10,
                        padding:10,
                        marginBottom:10
                      }}
                    >
                      <TextInput 
                        editable
                        onChangeText={text=>setUserName(text)}
                        value={username}
                        style={{padding:10, fontSize:17}}
                        placeholder='johndoe@gmail.com'
                      />
                    </View>
                    <View
                      style={{
                        borderColor:'gray', 
                        borderWidth:1, 
                        borderRadius:10,
                        padding:10
                      }}
                    >
                      <TextInput 
                        editable
                        onChangeText={text=>setUserName(text)}
                        value={username}
                        style={{padding:10, fontSize:17}}
                        placeholder='password'
                        secureTextEntry={true}
                      />
                    </View>
                  </View>
                </View>
            </View>
          </View>
        </ScrollView>
        
    
  )
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'white'
  },
  brandContainer:{
    justifyContent:'center', 
    flex:1,
    alignItems:'center'
  },
  brandText:{
    color:'#ffffff',
    fontSize:30,
    fontWeight:'bold',
    textTransform:'uppercase',
  },
  bottomView:{
    flex:1.5,
    backgroundColor: 'white',
    bottom: 50,
    borderTopStartRadius:60,
    borderTopEndRadius:60
  }
})