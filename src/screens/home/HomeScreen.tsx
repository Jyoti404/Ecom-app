import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import HomeHeader from "../../components/headers/HomeHeader";
import AppSafeAreaView from "../../components/views/AppSafeAreaView";
import { s, vs } from "react-native-size-matters";
import { AppFonts } from "../../styles/AppFonts";
import ProductCard from "../../components/cards/ProductCard";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../store/reducers/cartSlice";
import { getProductsData } from "../../config/dataServices";
import { Ionicons } from "@expo/vector-icons"; // For the chatbot icon
import { colors } from "../../styles/colors";
import ChatbotScreen from "../screens/Home/ChatbotScreen"; // adjust path


const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  
  const fetchData = async () => {
    const data = await getProductsData();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppSafeAreaView>
      <HomeHeader />
      
      <FlatList
        numColumns={2}
        data={products}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProductCard
            imageURL={item.imageURL}
            price={item.price}
            title={item.title}
            onAddCartPress={() => { dispatch(addItemToCart(item)) }}
          />
        )}
        contentContainerStyle={{ paddingHorizontal: s(10), paddingBottom: vs(70) }} // Added paddingBottom to avoid overlap
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: vs(10),
        }}
      />

      {/* Floating Chatbot Button */}
      <TouchableOpacity
        style={styles.chatbotButton}
        onPress={() => navigation.navigate("Chatbot")} // Replace with your navigation logic
      >
        <Ionicons name="chatbubble-ellipses" size={s(24)} color={colors.white} />
      </TouchableOpacity>
    </AppSafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  chatbotButton: {
    position: "absolute",
    right: s(20),
    bottom: vs(20),
    backgroundColor: colors.primary,
    width: s(50),
    height: s(50),
    borderRadius: s(25),
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // For Android shadow
    shadowColor: colors.black, // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});