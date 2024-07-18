import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import GoogleMapViewFull from '../Components/Search/GoogleMapViewFull';
import SearchBar from '../Components/Search/SearchBar';
import { UserLocationContext } from '../Context/UserLocationContext';
import GlobalApi from '../Services/GlobalApi';
import BusinessList from '../Components/Search/BusinessList';

export default function Search() {
  const [placeList, setPlaceList] = useState([]);
  const { location, setLocation } = useContext(UserLocationContext);

  useEffect(() => {
    getNearbySearchPlace('restaurant'); 
  }, []);

  const getNearbySearchPlace = (value) => {
    GlobalApi.searchByText(value).then(resp => {
      setPlaceList(resp.data.results);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBarContainer}>
        <SearchBar setSearchText={(value) => getNearbySearchPlace(value)} />
      </View>
      <GoogleMapViewFull placeList={placeList} />
      <View style={styles.businessListContainer}>
        <BusinessList placeList={placeList} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    position: 'absolute',
    zIndex: 20,
  },
  businessListContainer: {
    position: 'absolute',
    zIndex: 20,
    bottom: 0,
  },
});
