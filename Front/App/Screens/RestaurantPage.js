import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const RestaurantPage = ({ onClose }) => {
  const [closestRestaurants, setClosestRestaurants] = useState([]);

  useEffect(() => {
    // Simulating fetching closest restaurants data based on Rabat's coordinates
    fetchClosestRestaurants();
  }, []);

  const fetchClosestRestaurants = () => {
    // Simulated closest restaurants data based on Rabat's coordinates
    const restaurants = [
      {
        name: 'Le Ziryab Restaurant',
        latitude: 34.0191,
        longitude: -6.8369,
        specialties: ['Gourmet Dishes', 'Seafood', 'Fine Dining'],
      },
      {
        name: 'Dar Naji Restaurant',
        latitude: 34.0203,
        longitude: -6.8381,
        specialties: ['Moroccan Cuisine', 'Traditional Dishes'],
      },
      {
        name: 'La Sqala Restaurant',
        latitude: 34.0221,
        longitude: -6.8389,
        specialties: ['International Cuisine', 'Outdoor Dining'],
      },
    ];

    setClosestRestaurants(restaurants);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Image source={require('../../assets/close.png')} style={styles.closeIcon} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Restaurants</Text>
        <Text style={styles.subtitle}>Fine Dining Experience</Text>

        <MapView 
          style={styles.map}
          initialRegion={{
            latitude: 34.0209, // Latitude of Rabat
            longitude: -6.8417, // Longitude of Rabat
            latitudeDelta: 0.1, // Zoom level
            longitudeDelta: 0.1,
          }}
        >
          {closestRestaurants.map((restaurant, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: restaurant.latitude, longitude: restaurant.longitude }}
              title={restaurant.name}
              description={`Specialties: ${restaurant.specialties.join(', ')}`}
            />
          ))}
        </MapView>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Menu Highlights:</Text>
          {closestRestaurants.map((restaurant, index) => (
            <View key={index}>
              <Text style={styles.restaurantName}>{restaurant.name}</Text>
              <Text style={styles.infoText}>- {restaurant.specialties.join('\n- ')}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Make a Reservation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollView: {
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#000',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    zIndex: 1,
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  map: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoSection: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  infoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#555',
  },
  infoText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
    marginLeft: 10,
  },
  button: {
    backgroundColor: '#6BAA42',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RestaurantPage;
