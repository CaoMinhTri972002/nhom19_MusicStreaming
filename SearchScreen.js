// SearchScreen.js
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import songsData from './SongData';

export default function SearchScreen({ navigation }) { // thêm navigation làm prop
    const [query, setQuery] = useState('');

    const allSongs = Object.values(songsData).flat();

    const filteredSongs = allSongs.filter(song => 
        song.title.toLowerCase().startsWith(query.toLowerCase()) ||
        song.title.toLowerCase() === query.toLowerCase()
    );

    const handleSongPress = (song) => {
        navigation.navigate('MusicPlayer', {
            title: song.title,
            artist: song.artist,
            file: song.file
        });
    };
    

    return (
        <View style={{ flex: 1, padding: 10 }}>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'lightblue',
                    borderWidth: 1,
                    borderRadius: 8,
                    paddingLeft: 10,
                    marginBottom: 20
                }}
                placeholder="Search"
                value={query}
                onChangeText={text => setQuery(text)}
            />

            {query ? (
                <FlatList
                    data={filteredSongs}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }} 
                            onPress={() => handleSongPress(item)} // gọi handleSongPress khi nhấn vào bài hát
                        >
                            <Image source={item.image} style={{ width: 50, height: 50, marginRight: 10, borderRadius: 8 }} />
                            <View>
                                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.title}</Text>
                                <Text>{item.artist}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            ) : null}
        </View>
    );
}
