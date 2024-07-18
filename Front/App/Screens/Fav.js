import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';

const FavoritePage = ({ favoritePlaces }) => {
  return (
    <FlatList
      data={favoritePlaces}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.placeContainer}>
          <Image source={item.icon} style={styles.placeIcon} />
          <View style={styles.placeInfo}>
            <Text style={styles.placeName}>{item.name}</Text>
            <Text style={styles.placeAddress}>{item.address}</Text>
          </View>
        </View>
      )}
      contentContainerStyle={styles.listContent}
    />
  );
};

export default function Fav() {
  // Sample favorite places data (replace with actual data)
  const favoritePlaces = [
    {
      id: 1,
      name: 'Marina',
      address: 'Rabat',
      icon: require('./../../assets/location-pin.png'), // Change image to location icon
      // Add more details about the place as needed
    },
    {
      id: 2,
      name: 'Hassan',
      address: 'Rabat',
      icon: require('./../../assets/location-pin.png'), // Change image to location icon
      // Add more details about the place as needed
    },
    {
      id: 3,
      name: 'Hay Riad',
      address: 'Rabat',
      icon: require('./../../assets/location-pin.png'), // Change image to location icon
      // Add more details about the place as needed
    },
    {
      id: 4,
      name: 'Hay Karima',
      address: 'Salé',
      icon: require('./../../assets/location-pin.png'), // Change image to location icon
      // Add more details about the place as needed
    },
    {
      id: 5,
      name: 'Souissi',
      address: 'Rabat',
      icon: require('./../../assets/location-pin.png'), // Change image to location icon
      // Add more details about the place as needed
    },
    // Add more favorite places here
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Places</Text>
      <FavoritePage favoritePlaces={favoritePlaces} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContent: {
    paddingBottom: 20,
  },
  placeContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f4f7',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  placeIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
    tintColor: '#6BAA42', // Use the main color for the icon
  },
  placeInfo: {
    flex: 1,
  },
  placeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  placeAddress: {
    fontSize: 14,
    color: '#666',
  },
});
