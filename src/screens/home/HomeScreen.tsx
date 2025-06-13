import { FlatList, StyleSheet, Text, View, TouchableOpacity, Modal} from "react-native";
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

import { useMemo } from "react";
const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  
  const fetchData = async () => {
    const data = await getProductsData();
    setProducts(data);
  };
  const [selectedGender, setSelectedGender] = useState("All");
const [filterVisible, setFilterVisible] = useState(false);
const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
const filteredProducts = useMemo(() => {
  return products.filter((item) => {
    const matchesGender =
      selectedGender === "All" || item.category === selectedGender;
    const matchesPrice =
      item.price >= priceRange[0] && item.price <= priceRange[1];
    return matchesGender && matchesPrice;
  });
}, [products, selectedGender, priceRange]);


  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppSafeAreaView>
      <HomeHeader />
      
     <FlatList
  numColumns={2}
  data={filteredProducts}
  showsVerticalScrollIndicator={false}
  keyExtractor={(item) => item.id.toString()}
  ListHeaderComponent={
    <>
      <View style={styles.headerRow}>
        <Text style={styles.exploreTitle}>Explore</Text>
        <TouchableOpacity onPress={() => setFilterVisible(true)}>
          <Ionicons name="filter" size={s(24)} color={colors.primary} />
        </TouchableOpacity>
      </View>

      <View style={styles.genderToggleContainer}>
        {["Men", "Women"].map((gender) => (
          <TouchableOpacity
            key={gender}
            style={[
              styles.genderButton,
              selectedGender === gender && styles.genderButtonActive,
            ]}
            onPress={() => setSelectedGender(gender)}
          >
            <Text
              style={[
                styles.genderButtonText,
                selectedGender === gender && styles.genderButtonTextActive,
              ]}
            >
              {gender}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  }
  renderItem={({ item }) => (
    <ProductCard
      imageURL={item.imageURL}
      price={item.price}
      title={item.title}
      onAddCartPress={() => dispatch(addItemToCart(item))}
    />
  )}
  contentContainerStyle={{
    paddingHorizontal: s(10),
    paddingBottom: vs(70),
  }}
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

      {/* Filter Modal */}
<Modal visible={filterVisible} animationType="slide" transparent>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Filter</Text>
      <Text style={styles.modalLabel}>Price Range</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>₹{priceRange[0]}</Text>
        <Text>₹{priceRange[1]}</Text>
      </View>

      {/* Later you can add slider here */}

      <TouchableOpacity
        onPress={() => setFilterVisible(false)}
        style={styles.applyButton}
      >
        <Text style={styles.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

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
  exploreTitle: {
  fontSize: s(22),
  fontWeight: "bold",
  paddingHorizontal: s(10),
  marginTop: vs(10),
},

headerRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: s(10),
  marginBottom: vs(5),
},

genderToggleContainer: {
  flexDirection: "row",
  justifyContent: "center",
  marginVertical: vs(10),
},

genderButton: {
  paddingVertical: vs(6),
  paddingHorizontal: s(16),
  borderRadius: s(20),
  borderWidth: 1,
  borderColor: colors.primary,
  marginHorizontal: s(5),
},

genderButtonActive: {
  backgroundColor: colors.primary,
},

genderButtonText: {
  color: colors.primary,
  fontWeight: "500",
},

genderButtonTextActive: {
  color: colors.white,
},

modalContainer: {
  flex: 1,
  justifyContent: "center",
  backgroundColor: "rgba(0,0,0,0.3)",
},

modalContent: {
  backgroundColor: "white",
  marginHorizontal: s(20),
  borderRadius: 10,
  padding: s(20),
},

modalTitle: {
  fontSize: s(18),
  fontWeight: "bold",
  marginBottom: vs(10),
},

applyButton: {
  backgroundColor: colors.primary,
  marginTop: vs(20),
  padding: vs(10),
  borderRadius: 8,
  alignItems: "center",
},

applyButtonText: {
  color: colors.white,
  fontWeight: "bold",
},

modalLabel: {
  marginBottom: vs(5),
  fontSize: s(14),
},

});