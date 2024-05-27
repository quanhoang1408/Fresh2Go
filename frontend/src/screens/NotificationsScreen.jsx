import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NotificationsScreen = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    // Gọi API hoặc lấy dữ liệu thông báo từ nguồn khác
    // Ví dụ: fetch('https://api.example.com/notifications')
    //        .then(res => res.json())
    //        .then(data => setNotifications(data));

    setNotifications([
      { id: 1, title: 'Khuyến mãi đặc biệt!', message: 'Giảm giá 20% cho tất cả các đơn hàng hôm nay.' },
      { id: 2, title: 'Đơn hàng đã được xác nhận', message: 'Đơn hàng của bạn #1234 đã được xác nhận và đang được chuẩn bị.' },
      { id: 3, title: 'Cửa hàng mới gần bạn', message: 'Nhà hàng XYZ vừa mới khai trương, hãy thử ngay hôm nay!' },
    ]); // Dữ liệu mẫu
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.notificationItem}>
      <View style={styles.notificationIcon}>
        <Icon name="notifications-outline" size={24} color="#FF5733" />
      </View>
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={notifications}
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
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
  },
  notificationIcon: {
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  notificationMessage: {
    fontSize: 14,
    color: '#555',
  },
});

export default NotificationsScreen;