import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';

const MusicPlayer = ({ route, navigation }) => {
    const { title, artist, file, nextSong, previousSong } = route.params;
    const [sounds, setSound] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0); // Tiến trình bài hát
    const [duration, setDuration] = useState(0); // Thời gian tổng của bài hát

    // Hàm phát/dừng nhạc
    const togglePlayPause = async () => {
        if (isPlaying) {
            await sounds.pauseAsync(); // Dừng phát nhạc
        } else {
            if (sounds) {
                await sounds.playAsync(); // Tiếp tục phát nhạc
            } else {
                const { sound, status } = await Audio.Sound.createAsync(file);
                setSound(sound);
                setDuration(status.durationMillis); // Lấy thời gian tổng của bài hát
                await sound.playAsync(); // Tiếp tục phát nhạc
            }
        }
        setIsPlaying(!isPlaying);
    };

    // Hàm cập nhật thanh tiến trình
    const updateProgress = async () => {
        if (sounds) {
            const status = await sounds.getStatusAsync();
            setProgress(status.positionMillis / duration); // Cập nhật tiến trình
        }
    };

    // Sử dụng useEffect để cập nhật tiến trình mỗi giây
    useEffect(() => {
        if (sounds && isPlaying) {
            const interval = setInterval(updateProgress, 1000); // Cập nhật mỗi giây
            return () => clearInterval(interval); // Dọn dẹp khi component bị hủy
        }
    }, [sounds, isPlaying]);

    // Hàm chuyển đến bài hát tiếp theo
    const nextTrack = async () => {
        if (nextSong) {
            navigation.navigate('MusicPlayer', { ...nextSong });
        }
    };

    // Hàm chuyển đến bài hát trước
    const previousTrack = async () => {
        if (previousSong) {
            navigation.navigate('MusicPlayer', { ...previousSong });
        }
    };

    useEffect(() => {
        return () => {
            if (sounds) {
                sounds.unloadAsync(); // Giải phóng tài nguyên khi component bị hủy
            }
        };
    }, [sounds]);

    return (
        <View style={styles.container}>
            <Image source={require('./assets/giphy.webp')} style={styles.backgroundImage} />
            <View style={styles.overlay}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.artist}>{artist}</Text>

                <Pressable style={styles.playPauseButton} onPress={togglePlayPause}>
                    {isPlaying ? (
                        <Image source={require('./assets/stop.png')} style={styles.icon} />
                    ) : (
                        <Image source={require('./assets/play.png')} style={styles.icon} />
                    )}
                </Pressable>

                {/* Thanh tiến trình */}
                <Slider
                    style={styles.progressBar}
                    minimumValue={0}
                    maximumValue={1}
                    value={progress}
                    onValueChange={(value) => {
                        if (sounds) {
                            sounds.setPositionAsync(value * duration); // Cập nhật vị trí bài hát
                        }
                    }}
                />
                <View style={styles.controls}>
                    {/* Nút previous thay bằng icon */}
                    <Pressable onPress={previousTrack} style={styles.controlButton}>
                        <Image source={require('./assets/previous.png')} style={styles.controlIcon} />
                    </Pressable>
                    {/* Nút next thay bằng icon */}
                    <Pressable onPress={nextTrack} style={styles.controlButton}>
                        <Image source={require('./assets/next.png')} style={styles.controlIcon} />
                    </Pressable>
                </View>
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
        opacity: 0.7,
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
        elevation: 5,
    },
    icon: {
        height: 40,
        width: 40,
    },
    progressBar: {
        width: '100%',
        marginTop: 20,
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    controlButton: {
        backgroundColor: '#dcdcdc',
        borderRadius: 20,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    controlIcon: {
        height: 30,
        width: 30,
    },
});

export default MusicPlayer;
