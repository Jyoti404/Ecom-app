// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { colors } from "../../styles/colors";
// import { s, vs } from "react-native-size-matters";
// import { Ionicons } from "@expo/vector-icons";
// import AppButton from "../../components/buttons/AppButton";
// import { useNavigation } from "@react-navigation/native";
// import { useTranslation } from "react-i18next";

// const EmptyWishlist = () => {
//   const navigation = useNavigation();
//   const { t } = useTranslation();
  
//   return (
//     <View style={styles.container}>
//       <Ionicons name="heart-outline" size={s(60)} color={colors.gray} />
//       <Text style={styles.title}>{t("WISHLIST_EMPTY")}</Text>
//       <Text style={styles.subtitle}>{t("WISHLIST_EMPTY_MESSAGE")}</Text>
//       <AppButton
//         title={t("CONTINUE_SHOPPING")}
//         onPress={() => navigation.goBack()}
//         style={styles.button}
//       />
//     </View>
//   );
// };

// export default EmptyWishlist;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     paddingHorizontal: s(20),
//   },
//   title: {
//     fontSize: s(18),
//     fontFamily: "AppFontBold",
//     color: colors.primary,
//     marginTop: vs(20),
//   },
//   subtitle: {
//     fontSize: s(14),
//     fontFamily: "AppFontRegular",
//     color: colors.gray,
//     marginTop: vs(10),
//     textAlign: "center",
//   },
//   button: {
//     marginTop: vs(30),
//     width: "80%",
//   },
// });