import { Text, SafeAreaView, StyleSheet,View } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function TopList() {
  return (
 <View style={styles.container}>
     <View style={{backgroundColor:'red',height:300, width:'100%', justifyContent:'center', alignItems:'center'}}>
     <View style={{flexDirection:'row'}}>
      <View style={{backgroundColor:'green', height:150, width:150}}></View>
       <View style={{marginTop:30, marginLeft:20}}>
       <Text style={{fontWeight:'bold', fontSize:20}}>Top 50 - Canada</Text>
       </View>


     </View>

     
     </View>
 
 </View>
  );
}

const styles = StyleSheet.create({
 container:{
  flex:1
 }
});
