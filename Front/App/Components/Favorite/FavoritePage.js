import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function FavoritePage({ favoritePlaces }) {
  return (
    <View style={styles.container}>
      {favoritePlaces.map(place => (
        <View key={place.id} style={styles.placeContainer}>
          <Image source={place.icon} style={styles.icon} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{place.name}</Text>
            <Text style={styles.address}>{place.address}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  placeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  address: {
    fontSize: 16,
    color: 'gray',
  },
});
