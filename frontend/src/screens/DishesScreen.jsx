import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator } from 'react-native';


function DishesScreen({route}) {
  const { store } = route.params;
  const [dishes, setDishes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const mockDishes = [
    {
      id: 1,
      name: 'Phở bò đặc biệt',
      price: '50.000đ',
      image: require('../assets/images/spaghetti.jpg'), // Đường dẫn đến ảnh món ăn (nếu có)
      description: 'Phở bò thơm ngon với thịt bò tái, nạm, gầu, ...',
    },
    {
      id: 2,
      name: 'Bún chả Hà Nội',
      price: '40.000đ',
      image: require('../assets/images/spaghetti.jpg'),
      description: 'Bún chả truyền thống với thịt nướng thơm lừng.',
    },
    // ... thêm các món ăn khác
  ];

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        //const response = await axios.get(`YOUR_API_ENDPOINT/stores/${store.id}/dishes`); // Thay YOUR_API_ENDPOINT bằng endpoint thực tế của bạn
        //setDishes(response.data);
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        setDishes(mockDishes);
      } catch (error) {
        console.error('Lỗi khi lấy danh sách món ăn:', error);
        // Xử lý lỗi (ví dụ: hiển thị thông báo lỗi)
      } finally {
        setIsLoading(false);
      }
    };

    fetchDishes();
  }, []); // Chỉ fetch lại khi store.id thay đổi, chú ý thay đổi ****

  const renderDishItem = ({ item }) => (
    <View style={styles.dishItem}>
      <Image
        source={item.image} // Sử dụng item.image trực tiếp
        style={styles.dishImage}
      />
      <View style={styles.dishInfo}>
        <Text style={styles.dishName}>{item.name}</Text>
        <Text style={styles.dishPrice}>{item.price}</Text>
        {/* Hiển thị thêm thông tin món ăn nếu cần */}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.storeHeader}>
        <Image source={{ uri: store.image }} style={styles.storeImage} />
        <View style={styles.storeInfo}>
          <Text style={styles.storeName}>{store.name}</Text>
          {/* Hiển thị thêm thông tin nhà hàng nếu cần */}
        </View>
      </View>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={dishes}
          renderItem={renderDishItem}
          keyExtractor={(item) => item.id.toString()} // Đảm bảo key là duy nhất
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    storeHeader: {

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
    dishItem: {
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
      dishImage: {
        width: 80,
        height: 80,
        borderRadius: 8,
        marginRight: 16,
      },
      dishInfo: {
        flex: 1,
      },
      dishName: {
        fontSize: 18,
        fontWeight: 'bold',
      },
  });
  

export default DishesScreen;