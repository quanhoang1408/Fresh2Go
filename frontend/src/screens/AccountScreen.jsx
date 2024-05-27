import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AccountScreen = () => {
  const user = {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@example.com',
    avatar: 'https://example.com/avatar.jpg', // Thay bằng đường dẫn ảnh đại diện
  };

  return (
    <View style={styles.container}>
      {/* Thông tin người dùng */}
      <View style={styles.userInfo}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <View style={styles.userInfoText}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
        </View>
      </View>

      {/* Các tùy chọn */}
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionItem}>
          <Icon name="person-outline" size={24} color="#555" />
          <Text style={styles.optionText}>Thông tin cá nhân</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Icon name="card-outline" size={24} color="#555" />
          <Text style={styles.optionText}>Quản lý thanh toán</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionItem}>
          <Icon name="heart-outline" size={24} color="#555" />
          <Text style={styles.optionText}>Món ăn yêu thích</Text>
        </TouchableOpacity>
        {/* ... các tùy chọn khác */}
        <TouchableOpacity style={styles.optionItem}>
          <Icon name="log-out-outline" size={24} color="#FF5733" />
          <Text style={[styles.optionText, styles.logoutText]}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  userInfoText: {
    justifyContent: 'center',
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: '#555',
  },
  options: {
    // ...
  },
  optionItem: {
    // ...
  },
  optionText: {
    // ...
  },
  logoutText: {
    color: '#FF5733',
  },
});

export default AccountScreen;