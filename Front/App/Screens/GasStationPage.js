import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const GasStationPage = ({ onClose }) => {
  const [closestGasStations, setClosestGasStations] = useState([]);

  useEffect(() => {
    // Simulating fetching closest gas stations data based on Rabat's coordinates
    fetchClosestGasStations();
  }, []);

  const fetchClosestGasStations = () => {
    // Simulated closest gas stations data based on Rabat's coordinates
    const gasStations = [
      {
        name: 'Total Gas Station - Agdal',
        latitude: 34.0179,
        longitude: -6.8362,
        services: ['Fuel', 'Car Wash', 'Convenience Store', 'Air Pump'],
      },
      {
        name: 'Shell Gas Station - Hassan',
        latitude: 34.0203,
        longitude: -6.8366,
        services: ['Fuel', 'Car Wash', 'Convenience Store'],
      },
      {
        name: 'Afriquia Gas Station - Souissi',
        latitude: 34.0187,
        longitude: -6.8155,
        services: ['Fuel', 'Convenience Store'],
      },
    ];

    setClosestGasStations(gasStations);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={onClose}>
        <Image source={require('../../assets/close.png')} style={styles.closeIcon} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Gas Stations</Text>
        <Text style={styles.subtitle}>Find Nearby Fuel Stations</Text>

        <MapView 
          style={styles.map}
          initialRegion={{
            latitude: 34.0209, // Latitude of Rabat
            longitude: -6.8417, // Longitude of Rabat
            latitudeDelta: 0.1, // Zoom level
            longitudeDelta: 0.1,
          }}
        >
          {closestGasStations.map((station, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: station.latitude, longitude: station.longitude }}
              title={station.name}
              description={`Services: ${station.services.join(', ')}`}
            />
          ))}
        </MapView>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Services Offered:</Text>
          {closestGasStations.map((station, index) => (
            <View key={index}>
              <Text style={styles.stationName}>{station.name}</Text>
              <Text style={styles.infoText}>- {station.services.join('\n- ')}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Directions</Text>
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
  stationName: {
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

export default GasStationPage;
