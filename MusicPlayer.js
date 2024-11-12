import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
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
                style={styles.backgroundImage}
            />

            <View style={styles.overlay}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.artist}>{artist}</Text>

                <Pressable
                    style={styles.playPauseButton}
                    onPress={togglePlayPause}
                >
                    {isPlaying ? (
                        <Image source={require('./assets/stop.png')} style={styles.icon} />
                    ) : (
                        <Image source={require('./assets/play.png')} style={styles.icon} />
                    )}
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    backgroundImage: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        opacity: 0.7,  // Giảm độ sáng của ảnh nền
    },
    overlay: {
        position: 'absolute',
        top: '30%',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        textShadowColor: '#000000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        marginBottom: 10,
    },
    artist: {
        fontSize: 20,
        color: '#dcdcdc',
        marginBottom: 30,
        textShadowColor: '#000000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    playPauseButton: {
        backgroundColor: '#dcdcdc',
        borderRadius: 50,
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Thêm hiệu ứng nổi cho nút
    },
    icon: {
        height: 40,
        width: 40,
    },
});

export default MusicPlayer;
