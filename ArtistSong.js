import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, FlatList } from 'react-native';
import siaSongs from './SongData'; // Import dữ liệu bài hát

export default function ArtistSong({ route, navigation }) {
    const { artist, avatar } = route.params;

    const ItemSong = ({ title, artist, file, image,duration }) => (
        <Pressable
            style={{ borderWidth: 1, height: 90, width: 360, borderBottomWidth: 0.5, borderColor: '#ccc', borderRadius: 10, backgroundColor: 'white' }}
            onPress={() => navigation.navigate('MusicPlayer', { title, artist, file })} 
        >
            <View style={{flexDirection:'row', marginTop:3}}>
            <Image source={ image}
             style={{height:80, width:80, borderRadius:10}}
            ></Image>
            <View  style={{flexDirection:'column', marginLeft:20, marginTop:10}}>
            <Text style={{fontWeight:'bold'}} >{title}</Text>
            <Text >{artist}</Text>
            <Text >{duration}</Text>
            </View>
            </View>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={avatar} style={styles.avatar} />
                <Text style={styles.artistName}>{artist}</Text>
                <Text>65K Người theo dõi</Text>
            </View>
            <Pressable style={styles.followButton}>
                <Text style={styles.followButtonText}>Follow</Text>
            </Pressable>
            <Text style={styles.popularText}>Popular</Text>

            <FlatList
                data={siaSongs}
                renderItem={({ item }) => <ItemSong title={item.title} image={item.image}  artist={item.artist} file={item.file} duration={item.duration} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', paddingTop: 20, backgroundColor: '#f0f8ff' },
    header: { justifyContent: 'center', alignItems: 'center' },
    avatar: { height: 200, width: 200, borderRadius: 100 },
    artistName: { fontWeight: 'bold', fontSize: 20, marginTop: 10 },
    followButton: { height: 45, width: 100, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
    followButtonText: { fontSize: 18 },
    popularText: { fontWeight: 'bold', fontSize: 20, marginTop: 20, marginRight:280 },
});
