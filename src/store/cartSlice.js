import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.items.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementByOne: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload
      );

      if (itemInCart) {
        itemInCart.quantity++;
      }
    },
    decrementByOne: (state, action) => {
      const itemInCart = state.items.find(
        (item) => item.id === action.payload
      );

      if (itemInCart) {

        // Si la cantidad es mayor a 1 solamente decrementa
        if (itemInCart.quantity > 1) {
          itemInCart.quantity--;
        }

        // Si es igual a 1 lo elimina del carrito
        else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload
          );
        }

      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addToCart, removeFromCart, clearCart, incrementByOne, decrementByOne } = cartSlice.actions;
export const cartReducer = cartSlice.reducer; // Exportamos el reducer para usarlo en el store