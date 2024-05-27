import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import Icon from 'react-native-vector-icons/Ionicons';

const StoreScreen = () => {
  const navigation = useNavigation();
  const [stores, setStores] = useState([]);

  useEffect(() => {
    // Gọi API hoặc lấy dữ liệu cửa hàng từ nguồn khác
    // Ví dụ: fetch('https://api.example.com/stores')
    //        .then(res => res.json())
    //        .then(data => setStores(data));
    setStores([
      { id: 1, name: 'Cửa Hàng Vật Tư Nông Nghiệp M&T', image: 'https://example.com/store1.jpg' },
      { id: 2, name: 'Shop Hường hàng Nhật', image: 'https://example.com/store2.jpg' },
      { id: 3, name: 'ATI', image: 'https://example.com/store3.jpg' },
      { id: 4, name: 'Hương Giang Shop 111', image: 'https://example.com/store4.jpg' },
      { id: 5, name: 'HẢI HÀ MART', image: 'https://example.com/store5.jpg' },
    ]); // Dữ liệu mẫu
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.storeItem}
      onPress={() => navigation.navigate('StoreDetails', { storeId: item.id })}
    >
      <Image source={{ uri: item.image }} style={styles.storeImage} />
      <View style={styles.storeInfo}>
        <Text style={styles.storeName}>{item.name}</Text>
        {/* Hiển thị thông tin khác của cửa hàng */}
      </View>
      <Icon name="chevron-forward-outline" size={24} color="#888" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={stores}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  storeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  storeImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  storeInfo: {
    flex: 1,
  },
  storeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default StoreScreen;