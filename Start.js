import { StyleSheet, Text, View, ImageBackground, Pressable } from 'react-native';
import React from 'react';

export default function Screen1({ navigation }) {
  return (
    <ImageBackground 
      source={require('./assets/suggest2.jpg')} 
      style={styles.backgroundImage}
      imageStyle={styles.imageStyle}
    >
      <View style={styles.overlay}>
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>Your music</Text>
          <Text style={styles.titleText}>Your</Text>
          <Text style={styles.titleText}>artists</Text>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.createButton}>
            <Text style={styles.buttonText}>Create an account</Text>
          </Pressable>
          <Pressable 
            style={styles.signInButton} 
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <Text style={styles.buttonText}>I already have an account</Text>
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    opacity: 0.7,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  titleText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 36,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  createButton: {
    backgroundColor: '#4CAF50',
    width: 280,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  signInButton: {
    backgroundColor: '#2196F3',
    width: 280,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
