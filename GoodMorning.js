import { Text, View, Pressable, FlatList, TextInput, StyleSheet, Image, ScrollView } from 'react-native';
import songsData from './SongData';

export default function GoodMorning({ navigation, route }) {
    const { username } = route.params; 
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

    const trending = [
        { id: '1', image: require('./assets/Sia.jpg'), artist: 'Sia' },
        { id: '2', image: require('./assets/charlieputh.jpg'), artist: 'Charlie Puth' },
        { id: '3', image: require('./assets/Rihanna.jpg'), artist: 'Rihanna' },
        { id: '4', image: require('./assets/ellie.jpg'), artist: 'Ellie Goulding' },
    ];

    const ItemTrending = ({ image, artist }) => (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable style={styles.itemContainer}>
                    <View>
                        <Image source={image} style={styles.imageItem} />
                    </View>
                </Pressable>
                <Text style={styles.itemText}>{artist}</Text>
            </View>
        </View>
    );

    const ItemArtist = ({ avatar, artist }) => (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Pressable
                    onPress={() => navigation.navigate('ArtistSong', { artist, avatar, songs: songsData[artist.trim().toLowerCase().replace(/\s+/g, '')] })}
                    style={styles.artistButton}
                >
                    <Image source={avatar} style={styles.artistImage} />
                </Pressable>
                <Text style={styles.artistName}>{artist}</Text>
                <Pressable style={styles.followButton}>
                    <Text style={{ color: 'white' }}>Follow</Text>
                </Pressable>
            </View>
        </View>
    );

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('./assets/1.png')} style={styles.logo} />
                    <View style={styles.headerRight}>
                        <Image source={require('./assets/user.png')} style={styles.userIcon} />
                    </View>
                </View>

                <View style={styles.greeting}>
                    <Text>Good morning,</Text>
                    <Text style={styles.greeting}>{username}!</Text>
                    <TextInput placeholder='What you want to listen to' style={styles.searchInput} />
                </View>

                <View style={styles.suggestions}>
                    <Text style={styles.sectionTitle}>Suggestions for you</Text>
                    <View style={styles.suggestionsImages}>
                        <Image source={require('./assets/Suggest1.jpg')} style={styles.suggestionImage} />
                        <Image source={require('./assets/suggest2.jpg')} style={[styles.suggestionImage, styles.suggestionImageMargin]} />
                    </View>
                </View>

                <View style={styles.chartSection}>
                    <Text style={styles.sectionTitle}>Charts</Text>
                    <View style={styles.chartItems}>
                        <View style={styles.chartItem}>
                            <Pressable style={styles.chartImageButton}>
                                <Image source={require('./assets/top50Can.jpg')} style={styles.chartImage} />
                            </Pressable>
                            <Text style={styles.chartText}>Daily chart-toppers</Text>
                            <Text style={styles.chartText}>update</Text>
                        </View>
                        <View style={styles.chartItem}>
                            <Pressable style={styles.chartImageButton}>
                                <Image source={require('./assets/50global.jpg')} style={styles.chartImage} />
                            </Pressable>
                            <Text style={styles.chartText}>Daily chart-toppers</Text>
                            <Text style={styles.chartText}>update</Text>
                        </View>
                        <View style={styles.chartItem}>
                            <Pressable style={styles.chartImageButton}>
                                <Image source={require('./assets/50USA.jpg')} style={styles.chartImage} />
                            </Pressable>
                            <Text style={styles.chartText}>Daily chart-toppers</Text>
                            <Text style={styles.chartText}>update</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.trendingSection}>
                    <Text style={styles.sectionTitle}>Trending albums</Text>
                    <FlatList
                        data={trending}
                        renderItem={({ item }) => <ItemTrending image={item.image} artist={item.artist} />}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>

                <View style={styles.artistSection}>
                    <Text style={styles.sectionTitle}>Popular artists</Text>
                    <FlatList
                        data={data3}
                        renderItem={({ item }) => <ItemArtist avatar={item.avatar} artist={item.artist} navigation={navigation} />}
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
        backgroundColor: '#f0f8ff',
    },
    header: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
    },
    logo: {
        height: 25,
        width: 50,
    },
    headerRight: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 150,
    },
    userIcon: {
        height: 45,
        marginLeft: 110,
        width: 50,
    },
    greeting: {
        marginLeft: 10,
        fontWeight:'bold',
        fontSize:15
    },
    greetingName: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    searchInput: {
        height: 35,
        borderWidth: 1,
        borderRadius: 20,
        marginTop: 10,
    },
    suggestions: {
        marginTop: 20,
        marginLeft: 10,
    },
    sectionTitle: {
        fontWeight: 'bold',
    },
    suggestionsImages: {
        flexDirection: 'row',
        marginTop: 10,
    },
    suggestionImage: {
        height: 250,
        width: 200,
        borderRadius: 8,
    },
    suggestionImageMargin: {
        marginLeft: 15,
    },
    chartSection: {
        marginTop: 20,
    },
    chartItems: {
        flexDirection: 'row',
        marginTop: 10,
    },
    chartItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    chartImageButton: {
        height: 150,
        width: 150,
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    chartImage: {
        height: 150,
        width: 150,
        borderRadius: 10,
    },
    chartText: {
        fontSize: 10,
    },
    trendingSection: {
        marginTop: 20,
        marginLeft: 10,
    },
    artistSection: {
        marginTop: 20,
        marginLeft: 10,
    },
    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    imageItem: {
        height: 100,
        width: 100,
        borderRadius: 8,
    },
    itemText: {
        fontSize: 12,
        color: 'gray',
    },
    artistButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, // for Android shadow
        backgroundColor: 'white', // Adding background color helps the shadow be more visible
        borderRadius: 50,
        padding: 5, // Optional: adds some padding around the image
    },
    
    artistImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    artistName: {
        marginTop: 5,
        fontSize: 12,
        fontWeight: 'bold',
    },
    followButton: {
        backgroundColor: 'black',
        marginTop: 5,
        padding: 5,
        borderRadius: 8,
    },
});
