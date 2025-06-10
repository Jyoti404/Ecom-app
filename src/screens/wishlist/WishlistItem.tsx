// import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import React from "react";
// import { colors } from "../../styles/colors";
// import { s, vs } from "react-native-size-matters";
// import { Ionicons } from "@expo/vector-icons";

// type WishlistItemProps = {
//   id: string | number;
//   imageURL: string;
//   title: string;
//   price: number;
//   onPressRemove: () => void;
//   onPressAddToCart: () => void;
// };

// const WishlistItem = ({
//   imageURL,
//   title,
//   price,
//   onPressRemove,
//   onPressAddToCart,
// }: WishlistItemProps) => {
//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: imageURL }} style={styles.image} />
//       <View style={styles.details}>
//         <Text style={styles.title} numberOfLines={1}>{title}</Text>
//         <Text style={styles.price}>${price}</Text>
//       </View>
//       <View style={styles.actions}>
//         <TouchableOpacity onPress={onPressRemove} style={styles.actionButton}>
//           <Ionicons name="trash" size={s(20)} color={colors.danger} />
//         </TouchableOpacity>
//         <TouchableOpacity onPress={onPressAddToCart} style={styles.actionButton}>
//           <Ionicons name="cart" size={s(20)} color={colors.primary} />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// export default WishlistItem;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: "row",
//     alignItems: "center",
//     paddingVertical: vs(10),
//     borderBottomWidth: 1,
//     borderBottomColor: colors.lightGray,
//   },
//   image: {
//     width: s(60),
//     height: s(60),
//     borderRadius: s(10),
//     resizeMode: "contain",
//   },
//   details: {
//     flex: 1,
//     marginLeft: s(15),
//   },
//   title: {
//     fontSize: s(14),
//     fontFamily: "AppFontMedium",
//     color: colors.dark,
//   },
//   price: {
//     fontSize: s(14),
//     fontFamily: "AppFontBold",
//     color: colors.primary,
//     marginTop: vs(5),
//   },
//   actions: {
//     flexDirection: "row",
//   },
//   actionButton: {
//     padding: s(10),
//   },
// });