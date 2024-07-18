import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Image } from 'react-native';

const plans = [
  {
    id: 1,
    title: 'Bus Plan',
    description: 'Plan your bus route and schedule for convenient transportation.',
    image: require('../../assets/bus.jpg'), // Image for bus
  },
  {
    id: 2,
    title: 'Tram Plan',
    description: 'Discover tram routes and schedules for efficient city travel.',
    image: require('../../assets/tram.jpg'), // Image for tram
  },
  {
    id: 3,
    title: 'Train Plan',
    description: 'Explore train timetables and routes for long-distance travel.',
    image: require('../../assets/train.jpg'), // Image for train
  },
];

const PlanPage = ({ onClose }) => {
  const handleDownloadPlan = (planId) => {
    // Implement logic to download the selected plan
    // This function will be implemented later
  };

  return (
    <ImageBackground source={require('../../assets/Background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Image source={require('../../assets/close.png')} style={styles.closeIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Transportation Plans</Text>
        <ScrollView style={styles.content}>
          {plans.map((plan) => (
            <View key={plan.id} style={styles.planCard}>
              <Image source={plan.image} style={styles.planImage} />
              <Text style={styles.planTitle}>{plan.title}</Text>
              <Text style={styles.planDescription}>{plan.description}</Text>
              <TouchableOpacity style={styles.downloadButton} onPress={() => handleDownloadPlan(plan.id)}>
                <Image source={require('../../assets/downloads.png')} style={styles.downloadIcon} />
                <Text style={styles.downloadText}>Download</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
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
    position: 'relative',
  },
  title: {
    fontSize: 24,
    fontFamily: 'raleway-bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333', // Adjust text color as per design
  },
  content: {
    flex: 1,
    marginBottom: 20,
  },
  planCard: {
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3, // Add elevation for shadow effect (Android only)
    backgroundColor: '#fff', // White background for cards
  },
  planImage: {
    width: '100%',
    height: 200, // Adjust height as needed
    marginBottom: 10,
    borderRadius: 10, // Add border radius to image
  },
  planTitle: {
    fontSize: 20,
    fontFamily: 'raleway-bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333', // Adjust text color as per design
  },
  planDescription: {
    fontSize: 16,
    fontFamily: 'raleway',
    marginBottom: 10,
    textAlign: 'center',
    color: '#555', // Adjust text color as per design
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#6BAA42', // Main brand color for download button
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-end',
  },
  downloadIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
    tintColor: 'white', // Adjust icon color
  },
  downloadText: {
    color: 'white',
    fontFamily: 'raleway-bold',
    fontSize: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    zIndex: 10,
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
});

export default PlanPage;
