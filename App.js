import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GoodMorning from './GoodMorning';
import ArtistSong from './ArtistSong';
import MusicPlayer from './MusicPlayer';
import SearchScreen from './SearchScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home-outline';
                    } else if (route.name === 'Search') {
                        iconName = 'search-outline';
                    } else if (route.name === 'Feed') {
                        iconName = 'newspaper-outline';
                    } else if (route.name === 'Library') {
                        iconName = 'library-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={GoodMorning} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Feed" component={ArtistSong} />
            <Tab.Screen name="Library" component={MusicPlayer} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen
                    name="Main"
                    component={MainTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen 
                    name="ArtistSong" 
                    component={ArtistSong} 
                    options={{ title: 'Artist Songs' }}
                />
                 <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ title: 'Search' }} />
                <Stack.Screen 
                    name="MusicPlayer" 
                    component={MusicPlayer} 
                    options={{ title: 'Music Player' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
