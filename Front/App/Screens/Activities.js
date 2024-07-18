import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Activities() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Activities</Text>
      <TouchableOpacity style={styles.activityButton}>
        <Text style={styles.buttonText}>Upload a Post</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activityButton}>
        <Text style={styles.buttonText}>Add a Comment</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.activityButton}>
        <Text style={styles.buttonText}>Like a Post</Text>
      </TouchableOpacity>
      {/* Add more activity options */}
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
  activityButton: {
    backgroundColor: '#6BAA42',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
