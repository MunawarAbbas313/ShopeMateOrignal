import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage if available
const initialState = {
  items: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalQuantity: JSON.parse(localStorage.getItem("cartQuantity")) || 0,
  totalPrice: JSON.parse(localStorage.getItem("cartTotal")) || 0,
};

// Helper function to save cart state to localStorage
const saveToLocalStorage = (state) => {
  localStorage.setItem("cartItems", JSON.stringify(state.items));
  localStorage.setItem("cartQuantity", JSON.stringify(state.totalQuantity));
  localStorage.setItem("cartTotal", JSON.stringify(state.totalPrice));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalQuantity = state.items.reduce((acc, i) => acc + i.quantity, 0);
      state.totalPrice = state.items.reduce((acc, i) => acc + Number(i.price) * i.quantity, 0);

      saveToLocalStorage(state);
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);

      state.totalQuantity = state.items.reduce((acc, i) => acc + i.quantity, 0);
      state.totalPrice = state.items.reduce((acc, i) => acc + Number(i.price) * i.quantity, 0);

      saveToLocalStorage(state);
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.quantity += 1;
      }

      state.totalQuantity = state.items.reduce((acc, i) => acc + i.quantity, 0);
      state.totalPrice = state.items.reduce((acc, i) => acc + Number(i.price) * i.quantity, 0);

      saveToLocalStorage(state);
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter(i => i.id !== action.payload);
        }
      }

      state.totalQuantity = state.items.reduce((acc, i) => acc + i.quantity, 0);
      state.totalPrice = state.items.reduce((acc, i) => acc + Number(i.price) * i.quantity, 0);

      saveToLocalStorage(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      saveToLocalStorage(state);
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
