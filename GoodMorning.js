import { Text, View, Pressable, FlatList, TextInput, StyleSheet, Image, ScrollView } from 'react-native';

export default function GoodMorning({ navigation }) { // Nhận navigation như một props
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

    const data3 = [
        { id: '1', avatar: require('./assets/Sia.jpg'), artist: 'Sia' },
        { id: '2', avatar: require('./assets/charlieputh.jpg'), artist: 'Charlie Puth' },
        { id: '3', avatar: require('./assets/Rihanna.jpg'), artist: 'Rihanna' },
        { id: '4', avatar: require('./assets/ellie.jpg'), artist: 'Ellie Goulding' },
    ];
  
    const ItemChart = ({ location }) => (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={{ backgroundColor: 'green', height: 100, width: 100, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./assets/images.jpg')}
                       style={{height:100, width:100}}
                    ></Image>
                    <View>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>Top 50</Text>
                        <Text style={{ color: 'white', marginTop: 10, marginLeft: 5 }}></Text>
                    </View>
                </Pressable>
                <Text style={{ fontSize: 10 }}>Daily chart-toppers</Text>
                <Text style={{ fontSize: 10 }}>update</Text>
            </View>
        </View>
    );

    const ItemTrending = ({ nameSong, artistName }) => (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={{ backgroundColor: 'green', height: 100, width: 100, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        {/* Placeholder for future image */}
                    </View>
                </Pressable>
                <Text style={{ fontSize: 10 }}>{nameSong}</Text>
                <Text style={{ fontSize: 10 }}>{artistName}</Text>
            </View>
        </View>
    );

    const ItemArtist = ({ avatar, artist }) => (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable
                    onPress={() => navigation.navigate('ArtistSong', { artist, avatar })} // Thêm điều hướng
                    style={{ backgroundColor: 'green', height: 100, width: 100, marginTop: 10, marginLeft: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }}
                >
                    <View>
                        <Image source={avatar} style={{ height: 100, width: 100, borderRadius: 50 }} />
                    </View>
                </Pressable>
                <Text style={{ fontSize: 12, marginLeft: 10 }}>{artist}</Text>
                <Pressable style={{ backgroundColor: 'black', height: 25, width: 70, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginLeft: 10, marginTop: 10 }}>
                    <Text style={{ color: 'white' }}>Follow</Text>
                </Pressable>
            </View>
        </View>
    );

    return (
        <ScrollView>
            <View style={styles.container}>
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
                    <View style={{ marginLeft: 10, marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>Charts</Text>
                    </View>
                   
                   <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={{ height: 150, width: 150, marginLeft: 10, justifyContent: 'center', alignItems: 'center' , borderRadius:10}}>
                    <View>
                    <Image source={require('./assets/top50Can.jpg')}
                       style={{height:150, width:150,borderRadius:10}}
                    ></Image>
                
                       </View>
                </Pressable>
                <Text style={{ fontSize: 10 }}>Daily chart-toppers</Text>
                <Text style={{ fontSize: 10 }}>update</Text>
            </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={{borderRadius:10,  height: 150, width: 150, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./assets/50global.jpg')}
                       style={{height:150, width:150,borderRadius:10}}
                    ></Image>
                   
                </Pressable>
                <Text style={{ fontSize: 10 }}>Daily chart-toppers</Text>
                <Text style={{ fontSize: 10 }}>update</Text>
            </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={{ borderRadius:10,backgroundColor: 'green', height: 150, width: 150, marginLeft: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('./assets/50USA.jpg')}
                       style={{height:150, width:150,borderRadius:10}}
                    ></Image>
                    
                </Pressable>
                <Text style={{ fontSize: 10 }}>Daily chart-toppers</Text>
                <Text style={{ fontSize: 10 }}>update</Text>
            </View>
        </View>
        </View>










                </View>

                <View>
                    <View style={{ marginLeft: 10, marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>Trending albums</Text>
                    </View>
                    <FlatList
                        data={data2}
                        renderItem={({ item }) => <ItemTrending nameSong={item.nameSong} artistName={item.artistName} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View>
                    <View style={{ marginLeft: 10, marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold' }}>Popular artists</Text>
                    </View>
                    <FlatList
                        data={data3}
                        renderItem={({ item }) => <ItemArtist avatar={item.avatar} artist={item.artist} navigation={navigation} />} // Truyền navigation
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
