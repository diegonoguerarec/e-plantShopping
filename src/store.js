import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

// Create store
const store = configureStore({
    // Root reducer object
    reducer: {
        // Slice for cart management
        cart: cartReducer,
    },
});

// Export the store for using the app
export default store;
