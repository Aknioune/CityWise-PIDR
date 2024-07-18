import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal } from 'react-native';
import CategoryItem from './CategoryItem';
import GuidePage from '../../Screens/GuidePage';
import PlanPage from '../../Screens/PlanPage'; // Import PlanPage component

export default function PlaceList({ navigation }) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [showPlanModal, setShowPlanModal] = useState(false); // State for showing Plan modal

  const categoryList = [
    {
      id: 1,
      name: 'Guide',
      value: 'Guide',
      icon: require('./../../../assets/guide.png'),
    },
    {
      id: 2,
      name: 'Plan',
      value: 'Plan',
      icon: require('./../../../assets/task.png'),
    },
  ];

  const handleCategoryPress = (value) => {
    setSelectedCategory(value);
    if (value === 'Guide') {
      setShowGuideModal(true); // Show the GuidePage in a modal
    } else if (value === 'Plan') {
      setShowPlanModal(true); // Show the PlanPage in a modal
    }
  };

  return (
    <View style={{ marginTop: 15 }}>
      <Text style={styles.categoryText}>Activities</Text>
      <FlatList
        data={categoryList}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 5 }}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCategoryPress(item.value)}>
            <CategoryItem category={item} />
          </TouchableOpacity>
        )}
      />
      {/* Modal for GuidePage */}
      <Modal visible={showGuideModal} animationType="slide" transparent={true} onRequestClose={() => setShowGuideModal(false)}>
        <GuidePage onClose={() => setShowGuideModal(false)} />
      </Modal>
      {/* Modal for PlanPage */}
      <Modal visible={showPlanModal} animationType="slide" transparent={true} onRequestClose={() => setShowPlanModal(false)}>
        <PlanPage onClose={() => setShowPlanModal(false)} />
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
