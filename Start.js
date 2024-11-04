import { StyleSheet, Text, View,Image, Pressable } from 'react-native'
import React from 'react'

export default function Screen1() {
  return (
    <View style={styles.container}>
       <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
      <Image source={require('./assets/start.png')} style={{height:1000, width:500}}></Image>
       </View>
<View style={{justifyContent:'center', alignItems:'center', flex:1}}>
   <View><Text style={{color:'white', fontWeight:'bold', fontSize: 40}}>Your music</Text></View>
   <View><Text style={{color:'white', fontWeight:'bold', fontSize: 40}}>Your </Text></View>
   <View><Text style={{color:'white', fontWeight:'bold', fontSize: 40}}>artists</Text></View>
   
   <View style={{flex:1}}>
   <Pressable style={{backgroundColor:'white',width:300, height:40,borderRadius:20, justifyContent:'center', alignItems:'center' }}><Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>Create an account</Text></Pressable>
   <Pressable style={{backgroundColor:'white',width:300, height:40,borderRadius:20, justifyContent:'center', alignItems:'center', marginTop:10 }}><Text style={{color:'black', fontSize:20, fontWeight:'bold'}}>I already have an account </Text></Pressable>
   </View>
   
   
   </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container:{
     flex: 1,
    
  }

})