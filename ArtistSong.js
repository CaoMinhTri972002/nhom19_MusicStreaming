import { Text, SafeAreaView, StyleSheet,View,Pressable } from 'react-native';

// You can import supported modules from npm

export default function App() {
  return (
 <View style={styles.container}>
     <View style={{ justifyContent:'center', alignItems:'center'}}>
     <View style={{}}>
      <View style={{backgroundColor:'green', height:200, width:200,borderRadius:500}}></View>
       <View style={{marginTop:30, marginLeft:20, justifyContent:'center', alignItems:'center'}}>
       <Text style={{fontWeight:'bold', fontSize:20, marginLeft:10}}>Top 50 - Canada</Text>
       <Text>65K Followers</Text>
       </View>


     </View>

     
     </View>
 <View>
 <Pressable style={{height:45,marginLeft:10, borderWidth:1, width:100, borderRadius:20, justifyContent:'center', alignItems:'center'}}><Text style={{fontSize:18}}>Follow</Text></Pressable>
 </View>
 
 <View>
 <Text style={{marginLeft:15, fontWeight:'bold', fontSize:20, marginTop:20}}>Popular</Text>
 </View>
 
 
 
 
 
 
 </View>
  );
}

const styles = StyleSheet.create({
 container:{

 }
});
