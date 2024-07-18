import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import Register from './Register'; // Assuming Register component is in a separate file

export default function Profile() {
  const navigation = useNavigation();
  const [showRegistration, setShowRegistration] = useState(false); // State to manage registration pop-up visibility

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleSettings = () => {
    navigation.navigate('EditProfile');
  };

  const handleCloseModal = () => {
    setShowRegistration(false); // Close registration pop-up
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://via.placeholder.com/150' }} style={styles.avatar} />
      <Text style={styles.name}>Fatima Zahra Aknioune</Text>
      <Text style={styles.email}>Fatimaz@gmail.com</Text>

      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Bio:</Text>
          <Text style={styles.value}>supMTI student.</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Location:</Text>
          <Text style={styles.value}>Salé, Morocco</Text>
        </View>
        {/* Add more user details here */}
      </View>

      <TouchableOpacity style={styles.settingsButton} onPress={handleSettings}>
        <Ionicons name="settings-outline" size={24} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.settingsButtonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Ionicons name="log-out-outline" size={24} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>

      {/* Registration Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showRegistration}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Register setIsRegistering={setShowRegistration} />
            <Pressable style={styles.closeButton} onPress={handleCloseModal}>
              <Text style={styles.closeButtonText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7', // Light background color
    padding: 20,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 20,
  },
  details: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '100%',
  },
  detailItem: {
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  settingsButton: {
    flexDirection: 'row',
    backgroundColor: '#6BAA42', // Main color for settings button
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    justifyContent: 'center',
  },
  settingsButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
    flex: 1,
  },
  logoutButton: {
    flexDirection: 'row',
    backgroundColor: '#FF6347', // Logout button color
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  logoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 10,
  },
  closeButtonText: {
    color: '#007bff', // Close button color
    fontWeight: 'bold',
  },
  buttonIcon: {
    marginRight: 10,
  },
});
