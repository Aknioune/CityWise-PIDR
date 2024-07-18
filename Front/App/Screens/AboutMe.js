import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function AboutMe() {
  const [age, setAge] = React.useState('');
  const [bio, setBio] = React.useState('');

  const handleSaveAboutMe = () => {
    // Logic to save about me details
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        multiline
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveAboutMe}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#6BAA42',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
