import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  TextInput,
  Button,
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { Platform } from 'react-native';

const GuidePage = ({ onClose }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'Fatima Zahra',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec justo in odio tincidunt mollis.',
      image: require('../../assets/hassan.jpg'),
    },
    {
      id: 2,
      username: 'Karim Volex',
      description: 'Fusce id placerat ex. Morbi sed scelerisque dui, at congue odio.',
      image: require('../../assets/hassan.jpg'),
    },
    // Add more posts as needed
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newPost, setNewPost] = useState({
    username: '',
    description: '',
    image: null, // Holds the image URI
  });
  const [selectedImage, setSelectedImage] = useState(null);

  const handleAddPost = () => {
    setIsModalVisible(true);
  };

  const handleSavePost = () => {
    // Add logic to save the new post
    setPosts(prevPosts => [...prevPosts, { ...newPost, id: prevPosts.length + 1 }]);
    setIsModalVisible(false);
    setNewPost({ username: '', description: '', image: null });
    setSelectedImage(null);
  };

  const handleSelectImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, response => {
      if (!response.didCancel && !response.error) {
        const source = Platform.OS === 'ios' ? response.uri.replace('file://', '') : response.uri;
        setSelectedImage(source);
        setNewPost({ ...newPost, image: source });
      }
    });
  };

  const handleCancelPost = () => {
    setIsModalVisible(false);
    setNewPost({ username: '', description: '', image: null });
    setSelectedImage(null);
  };

  return (
    <ImageBackground source={require('../../assets/Background.jpg')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Image source={require('../../assets/close.png')} style={styles.closeIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton} onPress={handleAddPost}>
          <Image source={require('../../assets/plus.png')} style={styles.addIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Guids</Text>
        <ScrollView style={styles.content}>
          {posts.map(post => (
            <View key={post.id} style={styles.postContainer}>
              <Image source={post.image} style={styles.postImage} />
              <View style={styles.postDetails}>
                <Text style={styles.postUsername}>{post.username}</Text>
                <Text style={styles.postDescription}>{post.description}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        {/* Modal for adding a new post */}
        <Modal visible={isModalVisible} animationType="slide">
          <View style={styles.modalContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              value={newPost.username}
              onChangeText={text => setNewPost({ ...newPost, username: text })}
            />
            <TextInput
              style={[styles.input, styles.descriptionInput]}
              placeholder="Description"
              value={newPost.description}
              onChangeText={text => setNewPost({ ...newPost, description: text })}
              multiline
            />
            {selectedImage && <Image source={{ uri: selectedImage }} style={styles.selectedImage} />}
            <TouchableOpacity style={styles.imagePickerButton} onPress={handleSelectImage}>
              <Text style={styles.imagePickerButtonText}>Select Image</Text>
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
              <Button title="Cancel" onPress={handleCancelPost} color="#FF4500" />
              <Button title="Save Post" onPress={handleSavePost} />
            </View>
          </View>
        </Modal>
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
  addButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  addIcon: {
    width: 30,
    height: 30,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: 'raleway-bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    flex: 1,
    marginBottom: 20,
  },
  postContainer: {
    marginBottom: 20,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postDetails: {
    paddingHorizontal: 10,
  },
  postUsername: {
    fontSize: 18,
    fontFamily: 'raleway-bold',
    marginBottom: 5,
  },
  postDescription: {
    fontSize: 16,
    fontFamily: 'raleway',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  descriptionInput: {
    height: 100,
  },
  selectedImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  imagePickerButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  imagePickerButtonText: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'raleway-bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});

export default GuidePage;
