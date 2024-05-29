import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getStores } from '../services/services';


function StoreScreen() {
  const navigation = useNavigation();
  const mockStores = [
    {
      id: '1',
      name: 'Nhà hàng ABC',
      image: require('../assets/images/store-image.jpg'),
      rating: 4.5,
      deliveryTime: 30,
      // Các thông tin khác như phí giao hàng, khuyến mãi (nếu có)
    },
    {
      id: '2',
      name: 'Quán Ăn XYZ',
      image: require('../assets/images/store-image.jpg'),
      rating: 4.2,
      deliveryTime: 45,
      // ...
    },
    // ...Thêm các nhà hàng khác vào đây
  ];
  const [stores, setStores] = useState([]); // Dữ liệu nhà hàng (lấy từ API)

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const storesData = await getStores();
        setStores(storesData);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách cửa hàng:', error);
        // Hiển thị thông báo lỗi cho người dùng
      }
    };
  
    fetchStores();
  }, []);

  const handleStorePress = async (storeid) => {
    navigation.navigate('Món ăn', { store: storeid })
    console.log('test')
  };

  const renderStoreItem = ({ item }) => (
    <TouchableOpacity 
      onPress={() => handleStorePress(item.id)}
      style={styles.storeItem}>
      <Image
        source={item.image} // Sử dụng item.image trực tiếp
        style={styles.storeImage}
      />
      <View style={styles.storeInfo}>
        <Text style={styles.storeName}>{item.name}</Text>
        <Text style={styles.storeRating}>★ {item.rating}</Text>
        <Text style={styles.deliveryTime}>{item.deliveryTime} phút</Text>
        {/* Hiển thị phí giao hàng và khuyến mãi nếu có */}
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header với SearchBar và FilterButton */}
      <FlatList
        data={stores}
        renderItem={renderStoreItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  storeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16, // Khoảng cách giữa các mục
    padding: 8, // Khoảng đệm bên trong mỗi mục (tùy chọn)
    backgroundColor: 'white', // Thêm nền trắng để làm nổi bật
    borderRadius: 8, // Bo tròn các góc (tùy chọn)
    elevation: 2, // Tạo hiệu ứng đổ bóng (chỉ dành cho Android)
    shadowColor: '#000', // Tạo hiệu ứng đổ bóng (chỉ dành cho iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
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
