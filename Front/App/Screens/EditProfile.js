import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function EditProfile({ navigation }) {
  const [name, setName] = useState('Fatima Zahra Aknioune'); // Initial name state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initial logged-in state

  const handleSave = () => {
    // Placeholder logic to save updated profile information (API request example)
    setIsLoggedIn(true); // Simulate successful save

    // Clear input fields after save
    setName('');

    // Optionally navigate to another screen or update UI
    // navigation.navigate('ProfileUpdated');
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ? (
        <View>
          <Text style={styles.successMessage}>Profile updated successfully!</Text>
          {/* You can add more UI elements or navigate to another screen here */}
        </View>
      ) : (
        <View>
          <Text style={styles.title}>Edit Profile</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>

          {/* Additional options */}
          <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={styles.optionButtonText}>Reset Password</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('AboutMe')}>
            <Text style={styles.optionButtonText}>About Me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('Activities')}>
            <Text style={styles.optionButtonText}>Activities</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#6BAA42',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  saveButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  optionButton: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  optionButtonText: {
    color: '#333333',
    fontWeight: 'bold',
  },
  successMessage: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6BAA42',
    textAlign: 'center',
  },
});
