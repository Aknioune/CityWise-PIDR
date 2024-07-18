import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Help() {
    const [message, setMessage] = useState('');

    const handleSubmit = () => {
        if (message.trim() === '') {
            Alert.alert('Error', 'Please enter your message');
        } else {
            // Handle sending message logic (e.g., API call, etc.)
            Alert.alert('Success', 'Your message has been sent!');
            setMessage('');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Ionicons name="help-circle-outline" size={64} color="#6BAA42" style={styles.icon} />
                <Text style={styles.title}>Need Help?</Text>
                <Text style={styles.description}>
                    Our team is here to assist you! If you have any questions or need support, feel free to reach out.
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your message"
                    value={message}
                    onChangeText={text => setMessage(text)}
                    multiline
                    numberOfLines={6}
                />
                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    content: {
        width: '90%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    icon: {
        marginBottom: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 150,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        textAlignVertical: 'top', // Ensure text starts at the top of the input
    },
    button: {
        backgroundColor: '#6BAA42',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
