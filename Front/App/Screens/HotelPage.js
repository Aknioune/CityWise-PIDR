import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const HotelPage = ({ onClose }) => {
  return (
    <ImageBackground source={require('../../assets/Background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Hotels</Text>
        {/* Add your content for Hotels */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: 'raleway-bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HotelPage;
