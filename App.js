import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GoodMorning from './GoodMorning'; // Đường dẫn chính xác đến file
import ArtistSong from './ArtistSong'; // Đường dẫn chính xác đến file
import MusicPlayer from './MusicPlayer'; // Đường dẫn chính xác đến file

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="GoodMorning">
                <Stack.Screen name="GoodMorning" component={GoodMorning} />
                <Stack.Screen name="ArtistSong" component={ArtistSong} />
                <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
