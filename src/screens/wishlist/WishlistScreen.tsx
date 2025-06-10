import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppSafeAreaView from "../../components/views/AppSafeAreaView";
import HomeHeader from "../../components/headers/HomeHeader";
import EmptyWishlist from "../wishlist/EmptyWishlist";
import WishlistItem from "../wishlist/WishlistItem";
import { sharedPaddingHorizontal } from "../../styles/sharedStyles";
import { vs } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { removeItemFromWishlist } from "../../store/reducers/wishlistSlice";
import { useTranslation } from "react-i18next";
import AppButton from "../../components/buttons/AppButton";

const WishlistScreen = () => {
  const navigation = useNavigation();
  const { t } = useTranslation();
  const { items } = useSelector((state: RootState) => state.wishlistSlice);
  const dispatch = useDispatch();

  return (
    <AppSafeAreaView>
      <HomeHeader />
      {items?.length > 0 ? (
        <View style={{ paddingHorizontal: sharedPaddingHorizontal, flex: 1 }}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
              return (
                <WishlistItem
                  {...item}
                  onPressRemove={() => dispatch(removeItemFromWishlist(item))}
                  onPressAddToCart={() => {
                    // Optional: Add functionality to move item to cart
                    dispatch(removeItemFromWishlist(item));
                    // dispatch(addItemToCart(item));
                  }}
                />
              );
            }}
            showsVerticalScrollIndicator={false}
          />

          <AppButton
            title={t("CONTINUE_SHOPPING")}
            onPress={() => navigation.goBack()}
            style={styles.continueButton}
          />
        </View>
      ) : (
        <EmptyWishlist />
      )}
    </AppSafeAreaView>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  continueButton: {
    marginVertical: vs(4),
  },
});