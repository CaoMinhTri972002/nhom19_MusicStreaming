// MusicPlayer.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable ,Image} from 'react-native';
import { Audio } from 'expo-av';

const MusicPlayer = ({ route, navigation }) => {
    const { title, artist, file } = route.params; 
    const [sound, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false); 

    // Hàm phát/dừng nhạc
    const togglePlayPause = async () => {
        if (isPlaying) {
            await sound.pauseAsync(); // Dừng phát nhạc
        } else {
            if (sound) {
                await sound.playAsync(); // Tiếp tục phát nhạc
            } else {
                const { sound: newSound } = await Audio.Sound.createAsync(file); 
                setSound(newSound);
                await newSound.playAsync(); // Phát nhạc
            }
        }
        setIsPlaying(!isPlaying); 
    };

    // Dọn dẹp âm thanh khi component unmount
    useEffect(() => {
        return () => {
            if (sound) {
                sound.unloadAsync(); 
            }
        };
    }, [sound]);

    return (
        <View style={styles.container}>
            <Image
                source={require('./assets/giphy.webp')}
                style={{ height: '100%', width: '100%' }}
            ></Image>
            {/* View bao quanh tiêu đề và nút để đặt chồng lên hình */}
            <View style={{ position: 'absolute', top: '30%', alignItems: 'center', width: '100%' }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.artist}>{artist}</Text>
                <Pressable
                    style={{ backgroundColor:'#dcdcdc',borderRadius: 10, height: 50, width: 60, justifyContent: 'center', alignItems: 'center', marginTop: 20 }}
                    onPress={togglePlayPause}
                >
                   {isPlaying ? <Image source={require('./assets/stop.png')}
                                                                    style={{height:35, width:35}}
                    ></Image> : <Image source={require('./assets/play.png')}
                    style={{height:35, width:35}}
></Image>}
                </Pressable>
            </View>
        </View>
    );
    
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title: { color: 'white',fontSize: 24, fontWeight: 'bold' },
    artist: { fontSize: 18, color: '#dcdcdc', marginVertical: 10 },
  
});

export default MusicPlayer;
