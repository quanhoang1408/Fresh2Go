import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const HomeScreen = () => {
  const screenHeight = Dimensions.get('window').height;
  return (
    <View className="flex-1 bg-green">
      {/* Header */}
      <View 
        className="p-4 bg-green-500 flex-row items-center justify-center" 
        style={{ height: screenHeight / 3 }} // Chiều rộng 1/3 màn hình
      >
        <Text className="text-2xl font-bold text-green">FRESH-2-GO</Text>
        <Text className="text-lg text-white">ngon, bổ, rẻ</Text>
      </View>

      <ScrollView>
        {/* Cửa hàng tiện lợi A */}
        <View className="p-4">
          <View className="flex-row items-center">
            <Image
              source={require('../assets/images/spaghetti.jpg')} // Replace with your store icon
              className="w-10 h-10 mr-2"
            />
            <View>
              <Text className="text-lg font-semibold">Cửa hàng tiện lợi A</Text>
              <View className="flex-row items-center">
                <Text className="text-yellow-500">★4.8</Text>
                <Text className="text-gray-500 ml-1">(25)</Text>
              </View>
            </View>
          </View>

          {/* Món ăn của cửa hàng A */}
          <ScrollView horizontal className="mt-4">
            {/* Replace with your food item components */}
            {/* Example: */}
            <FoodItem image={require('../assets/images/spaghetti.jpg')} name="Món 1" price="24.000" />
            <FoodItem image={require('../assets/images/spaghetti.jpg')} name="Món 2" price="20.000" />
            {/* ... more food items */}
          </ScrollView>
        </View>

        {/* Cửa hàng B (Tương tự như cửa hàng A) */}
        {/* ... */}
      </ScrollView>

      {/* Bottom Navigation Bar */}
    </View>
  );
};

// FoodItem component (Example)
const FoodItem = ({ image, name, price }) => (
  <TouchableOpacity className="mr-4">
    <Image source='../assets/images/spaghetti.jpg' className="w-24 h-24 rounded-lg" />
    <Text className="text-center mt-2">{name}</Text>
    <Text className="text-center text-red-500">{price}</Text>
  </TouchableOpacity>
);

export default HomeScreen;