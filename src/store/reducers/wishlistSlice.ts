// import { createSlice } from "@reduxjs/toolkit";

// interface wishlistItemProps {
//   id: number | string;
//   name: string;
//   // Add any other product properties you need
// }

// interface initialStateProps {
//   items: wishlistItemProps[];
// }

// const initialState: initialStateProps = {
//   items: [],
// };

// const wishlistSlice = createSlice({
//   name: "wishlist",
//   initialState: initialState,
//   reducers: {
//     // addItemToWishlist
//     addItemToWishlist: (state, action) => {
//       const existingItem = state.items.find(
//         (item) => item.id === action.payload.id
//       );
//       if (!existingItem) {
//         state.items.push(action.payload);
//       }
//     },
//     // removeItemFromWishlist
//     removeItemFromWishlist: (state, action) => {
//       state.items = state.items.filter(
//         (item) => item.id !== action.payload.id
//       );
//     },
//     // emptyWishlist
//     emptyWishlist: (state) => {
//       state.items = [];
//     }
//   },
// });

// export const { addItemToWishlist, removeItemFromWishlist, emptyWishlist } = wishlistSlice.actions;
// export default wishlistSlice.reducer;