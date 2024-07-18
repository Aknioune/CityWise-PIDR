import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal } from 'react-native';
import CategoryItem from './CategoryItem';
import GasStationPage from '../../Screens/GasStationPage';
import RestaurantPage from '../../Screens/RestaurantPage';
import CafePage from '../../Screens/CafePage';

export default function CategoryList() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categoryList = [
    {
      id: 1,
      name: 'Gas Station',
      value: 'gas_station',
      icon: require('./../../../assets/gas.png'),
    },
    {
      id: 2,
      name: 'Restaurants',
      value: 'restaurant',
      icon: require('./../../../assets/food.png'),
    },
    {
      id: 3,
      name: 'Cafe',
      value: 'cafe',
      icon: require('./../../../assets/cafe.png'),
    },
  ];

  const handleCloseModal = () => {
    setSelectedCategory(null);
  };

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={styles.categoryText}>Select Top Category</Text>
      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => setSelectedCategory(item.value)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
      <Modal
        visible={selectedCategory === 'gas_station'}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <GasStationPage onClose={handleCloseModal} />
      </Modal>
      <Modal
        visible={selectedCategory === 'restaurant'}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <RestaurantPage onClose={handleCloseModal} />
      </Modal>
      <Modal
        visible={selectedCategory === 'cafe'}
        animationType="slide"
        transparent={true}
        onRequestClose={handleCloseModal}
      >
        <CafePage onClose={handleCloseModal} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryText: {
    fontSize: 20,
    fontFamily: 'raleway-bold',
  },
});
