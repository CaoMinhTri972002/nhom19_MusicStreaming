import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, FlatList } from 'react-native';
// Import dữ liệu bài hát

export default function ArtistSong({ route, navigation }) {
    const { artist, avatar, songs } = route.params; // Nhận dữ liệu bài hát từ params

    const ItemSong = ({ title, artist, file, image, duration }) => (
        <Pressable
            style={{ borderWidth: 1, height: 90, width: 356, borderBottomWidth: 0.5, borderColor: '#ccc', borderRadius: 10, backgroundColor: 'white' }}
            onPress={() => navigation.navigate('MusicPlayer', { title, artist, file })} 
        >
            <View style={{ flexDirection: 'row', marginTop: 3 }}>
                <Image source={image} style={{ height: 80, width: 80, borderRadius: 10 }} />
                <View style={{ flexDirection: 'column', marginLeft: 20, marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold' }}>{title}</Text>
                    <Text>{artist}</Text>
                    <Text>{duration}</Text>
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
                data={songs} 
                renderItem={({ item }) => <ItemSong title={item.title} image={item.image} artist={item.artist} file={item.file} duration={item.duration} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', paddingTop: 20, backgroundColor: '#f0f8ff' },
    header: { justifyContent: 'center', alignItems: 'center' },
    avatar: { height: 150, width: 150, borderRadius: 100 },
    artistName: { fontWeight: 'bold', fontSize: 18, marginTop: 10 },
    followButton: { height: 40, width: 90, borderWidth: 1, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 10 },
    followButtonText: { fontSize: 18 },
    popularText: { fontWeight: 'bold', fontSize: 20, marginTop: 20, marginRight: 280 },
});