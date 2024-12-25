import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/productSlice'
import userReducer from './slices/userSlice'

export default configureStore ({
    reducer: {
        products: productReducer,
        user: userReducer,
    }
})