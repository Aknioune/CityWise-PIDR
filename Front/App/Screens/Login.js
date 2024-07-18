import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import Register from './Register'; // Import Register component
import Profile from './Profile'; // Assuming Profile component is in a separate file

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // Track registration state

  const handleLogin = () => {
    // Check if the entered username and password match the expected values
    if (username === 'FatimaZ' && password === '123') {
      setIsLoggedIn(true); // Set isLoggedIn to true upon successful login
      navigation.navigate('Profile'); // Navigate to Profile tab upon successful login
    } else {
      // Handle incorrect login credentials
      Alert.alert('Error', 'Invalid username or password. Please try again.');
    }
  };

  const handleRegisterRedirect = () => {
    setIsRegistering(true); // Set state to true to show registration form
  };

  return (
    <View style={styles.container}>
      {!isLoggedIn && !isRegistering ? ( // Render login form if not logged in and not registering
        <>
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registerButton} onPress={handleRegisterRedirect}>
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
        </>
      ) : isRegistering ? ( // Render registration form if registering
        <Register setIsRegistering={setIsRegistering} />
      ) : (
        <Profile /> // Render Profile component upon successful login
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  loginButton: {
    backgroundColor: '#6BAA42',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  registerButton: {
    backgroundColor: '#6BAA42',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

