import { Text, SafeAreaView, Pressable,FlatList,TextInput, StyleSheet, View, ScrollView } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {


    const data1 = [
        { id: '1', location: 'Korea' },
        { id: '2', location: 'Global' },
        { id: '3', location: 'Canada' },
    ];

     const data2 = [
  { id: '1', image: '', nameSong: 'Korea', artistName: 'Jessica Gonzaliez' },
  { id: '2', image: '', nameSong: 'Magna nost', artistName: 'Brian Thomas' },
  { id: '3', image: '', nameSong: 'Korea', artistName: 'Jessica Gonzaliez' },
  { id: '4', image: '', nameSong: 'Korea', artistName: 'Jessica Gonzaliez' }
];

  const data3 =[
   {
     id:'1',
     image:'',
     artist:'Sia'
   },
    {
     id:'2',
     image:'',
     artist:'Charlie Puth '
   },
    {
     id:'3',
     image:'',
     artist:'Rihanna'
   },
    {
     id:'4',
     image:'',
     artist:'Ellie Goulding '
   },

  ]



const ItemChart = ({location})=>(
    <View style={{flexDirection:'row'}}>
    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Pressable style={{backgroundColor:'green',height:100,width:100, marginLeft:10,justifyContent:'center', alignItems:'center' }}>
                    <View>
                     <Text style={{fontWeight:'bold', color:'white'}}>Top 50</Text>
                    <Text style={{color:'white',marginTop:10, marginLeft:5}} >{location}</Text>
                    </View>
                    </Pressable>
                    <Text style={{fontSize:10}}>Daily chart-toppers</Text>
                     <Text style={{fontSize:10}}>update</Text>
                      </View>
                    </View>

)
const ItemTrending= ({image,nameSong,artistName})=>(
     <View style={{flexDirection:'row'}}>
    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Pressable style={{backgroundColor:'green',height:100,width:100, marginLeft:10,justifyContent:'center', alignItems:'center' }}>
                    <View>
                    
                    
                    </View>
                    </Pressable>
                     <Text style={{fontSize:10}}>{nameSong}</Text>
                    <Text style={{fontSize:10}}>{artistName}</Text>
                      </View>
                    </View>

)

const ItemArtist= ({image,artist})=>(
     <View style={{flexDirection:'row'}}>
    <View style={{justifyContent:'center', alignItems:'center'}}>
                    <Pressable style={{backgroundColor:'green',height:100,width:100, marginLeft:10,justifyContent:'center', alignItems:'center',borderRadius:50 }}>
                    <View>
                    </View>
                    </Pressable>
                  
                     <Text style={{fontSize:10, marginLeft:10}}>{artist}</Text>
                     <Pressable style={{backgroundColor:'black', height:25, width:70 , borderRadius:20, justifyContent:'center', alignItems:'center', marginLeft:10, marginTop:10}}><Text style={{color:'white'}}>Follow</Text></Pressable>
                      </View>
                    </View>

)



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={{ backgroundColor: 'gray', height: 50, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'green', height: 25, width: 50 }}></View>
                    <View style={{ flex: 1, flexDirection: 'row', marginLeft: 150 }}>
                        <View style={{ backgroundColor: 'green', height: 25, width: 50 }}></View>
                        <View style={{ backgroundColor: 'green', height: 25, marginLeft: 25, width: 50 }}></View>
                    </View>
                </View>

                <View style={{ marginLeft: 10, marginTop: 20 }}>
                    <Text>Good morning,</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Ashley Scott</Text>
                    <TextInput placeholder='What you want to listen to' style={{ height: 30, borderWidth: 1, borderRadius: 20, marginTop: 10 }} />
                </View>

                <View style={{ marginTop: 20, marginLeft: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>Suggestions for you</Text>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <View style={{ backgroundColor: 'pink', height: 180, marginLeft: 10, width: 120 }}></View>
                        <View style={{ backgroundColor: 'pink', height: 180, marginLeft: 10, width: 120 }}></View>
                    </View>
                </View>

                <View>
                    <View style={{ marginLeft: 10, marginTop:10 }}>
                        <Text style={{ fontWeight: 'bold' }}>Charts</Text>
                    </View>
                     <FlatList data={data1}
                     renderItem={({item})=><ItemChart location={item.location} ></ItemChart>}
                    numColumns={1}
                    horizontal={true}
                    ></FlatList>
                </View>

<View>
<View style={{marginLeft:10, marginTop:10}}>
<Text style={{fontWeight:'bold'}}>Trending albums</Text>



</View>
 <FlatList data={data2}
                     renderItem={({item})=><ItemTrending
                     nameSong = {item.nameSong}
                       artistName={item.artistName} 

                      ></ItemTrending>}
                    numColumns={1}
                    horizontal={true}
                    ></FlatList>
</View>
   <View style={{marginLeft:10, marginTop:10}}><Text style={{fontWeight:'bold'}}>Popular artists</Text></View>
 <FlatList data={data3}
                     renderItem={({item})=><ItemArtist
                  
                       artist={item.artist} 

                      ></ItemArtist>}
                    numColumns={1}
                    horizontal={true}
                    ></FlatList>


               
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
