
import React, { useState } from 'react'
import { StyleSheet,View,Text, Touchable, TouchableOpacity, ScrollView, ImageBackground, Dimensions, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import camera from '../assets/images/camera.jpg'
import { TextInput } from 'react-native-gesture-handler'
import { useEffect } from 'react'
import { Keyboard } from 'react-native'

function Login({username}){
  return(
    <View style={{marginTop: 40}}>
                  <View>
                    <View
                      style={{
                        borderColor:'gray', 
                        borderWidth:1, 
                        borderRadius:10,
                        padding:8,
                        marginBottom:20
                      }}
                    >
                      <TextInput 
                        editable
                        onChangeText={text=>setUserName(text)}
                        value={username}
                        style={{padding:10, fontSize:17, fontWeight:'900'}}
                        placeholder='johndoe@gmail.com'
                      />
                    </View>
                    <View
                      style={{
                        borderColor:'gray', 
                        borderWidth:1, 
                        borderRadius:10,
                        padding:8,
                       
                      }}
                    >
                      
                        <TextInput 
                        editable
                        onChangeText={text=>setUserName(text)}
                        value={username}
                        style={{padding:10, fontSize:17, fontWeight:'900'}}
                        placeholder='password'
                        secureTextEntry={true}
                      />
                      
                      
                    </View>
                    <TouchableOpacity
                      style={{
                        alignItems:'center',
                        justifyContent:'center',
                        marginTop:15,
                        backgroundColor:'black',
                        padding:18, 
                        color:'white',
                      }}
                    >
                      <Text style={{color:'white', fontSize:15, fontWeight:'900'}}>Login</Text>
                    </TouchableOpacity>
                  </View>
                </View>
  )
}
function Register({username}){
  return(
    <View style={{marginTop: 40}}>
                  <View>
                    <View
                      style={{
                        borderColor:'gray', 
                        borderWidth:1, 
                        borderRadius:10,
                        padding:8,
                        marginBottom:20
                      }}
                    >
                      <TextInput 
                        editable
                        onChangeText={text=>setUserName(text)}
                        value={username}
                        style={{padding:10, fontSize:17, fontWeight:'900'}}
                        placeholder='johndoe@gmail.com'
                      />
                    </View>
                    <View
                      style={{
                        borderColor:'gray', 
                        borderWidth:1, 
                        borderRadius:10,
                        padding:8,
                       
                      }}
                    >
                      
                        <TextInput 
                        editable
                        onChangeText={text=>setUserName(text)}
                        value={username}
                        style={{padding:10, fontSize:17, fontWeight:'900'}}
                        placeholder='password'
                        secureTextEntry={true}
                      />
                      
                      
                    </View>
                    <TouchableOpacity
                      style={{
                        alignItems:'center',
                        justifyContent:'center',
                        marginTop:15,
                        backgroundColor:'black',
                        padding:18, 
                        color:'white',
                      }}
                    >
                      <Text style={{color:'white', fontSize:15, fontWeight:'900'}}>Register</Text>
                    </TouchableOpacity>
                  </View>
                </View>
  )
}
export default function Account({navigation}) {
  const [username, setUserName] = useState('');
  const [keyboardStatus, setKeyboardStatus] = useState('');
  const [isLogin, setIsLogin] = useState(false)
  
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
                <Text style={{
                  color:'grey',
                  alignItems:'center',
                  justifyContent:'center', 
                  alignSelf:'center', 
                  fontSize:30, 
                  fontWeight:'600',
                  marginBottom:10
                }}>RGC FLIX</Text>
                <Text style={{fontWeight:'800', alignSelf:'center'}}>
                  Don't have an account?
                  
                    
                      <Text style={{fontWeight:'600',color:'darkorange', fontStyle:'italic'}}>
                        {' '}
                        Register now
                      </Text>
                 
                  
                </Text> 
                {/***Form Inputs */}
                {
                  isLogin?(
                    <Login username={username}/>
                  ):(
                    <Register username={username}/>
                  ) 
                }
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