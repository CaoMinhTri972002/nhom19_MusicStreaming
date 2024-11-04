import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GoodMorning from './GoodMorning';
import ArtistSong from './ArtistSong';
import MusicPlayer from './MusicPlayer';
const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="GoodMorning" component={GoodMorning} />
                <Stack.Screen name="ArtistSong" component={ArtistSong} />
                   <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
