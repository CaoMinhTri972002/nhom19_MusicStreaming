import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native';
import GoodMorning from './GoodMorning';
import ArtistSong from './ArtistSong';
import MusicPlayer from './MusicPlayer';
import SearchScreen from './SearchScreen';
import Start from './Start';
import LoginScreen from './LoginScreen';
import { Ionicons } from '@expo/vector-icons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Màn hình thư viện nhạc (Music Library)
function MusicLibrary() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Music Library</Text>
        </View>
    );
}

// Màn hình Bottom Tab (Main Tabs)
function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'GoodMorning') {
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
            <Tab.Screen name="GoodMorning" component={GoodMorning} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Feed" component={ArtistSong} />
            <Tab.Screen name="Library" component={MusicLibrary} />
        </Tab.Navigator>
    );
}

// Điều hướng chính
export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={isLoggedIn ? 'MainTabs' : 'Start'}>
                {/* Màn hình Start */}
                <Stack.Screen name="Start" component={Start} options={{ title: 'Start' }} />

                {/* Màn hình đăng nhập */}
                <Stack.Screen 
                    name="LoginScreen" 
                    component={LoginScreen} 
                    options={{ title: 'Login' }} 
                    listeners={({ navigation }) => ({
                        focus: () => {
                            if (isLoggedIn) {
                                navigation.replace('Main'); // Chuyển tới Main (MainTabs)
                            }
                        },
                    })}
                />

                {/* Màn hình chính chứa thanh tab */}
                <Stack.Screen 
                    name="MainTabs" 
                    component={MainTabs} 
                    options={{ headerShown: false }} // Ẩn header của MainTabs
                />

                {/* Các màn hình khác */}
                <Stack.Screen name="GoodMorning" component={GoodMorning} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ title: 'search' }} />
                <Stack.Screen name="ArtistSong" component={ArtistSong} options={{ title: 'Artist Songs' }} />
                <Stack.Screen name="MusicPlayer" component={MusicPlayer} options={{ title: 'Music Player' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
