import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { products } from '../../data/products'

export const fetchUserProducts = createAsyncThunk(
    'products/fetchUserProducts',
    async function ({ userId }, { rejectWithValue }) {
        try {
            const response = await fetch(`https://courseproject2course-default-rtdb.firebaseio.com/userProducts/${userId}.json`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) {
                return rejectWithValue('Server Error!')
            }

            const data = await response.json()
            return { data, userId }

        } catch (error) {
            return rejectWithValue(`Network error! ${error}`)
        }
    }
)

export const addProductToBasket = createAsyncThunk(
    'products/addProductToBasket',
    async function ({ product, userId }, { getState, rejectWithValue }) {
        const { basket } = getState().products

        const userBasket = basket[userId] || []

        const updatedBasket = [...userBasket, { ...product, quantity: 1 }]

        try {
            const response = await fetch(`https://courseproject2course-default-rtdb.firebaseio.com/userProducts/${userId}.json`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBasket),
            })

            if (!response.ok) {
                return rejectWithValue('Server Error!')
            }

            return { userId, updatedBasket }

        } catch (error) {
            return rejectWithValue(`Network error! ${error}`)
        }
    }
)

export const removeProductFromBasket = createAsyncThunk(
    'products/removeProductFromBasket',
    async function({ userId, productId }, { getState, rejectWithValue }) {

        const { basket } = getState().products

        const userBasket = basket[userId] || []

        const updatedBasket = userBasket.filter(product => product.id !== productId)


        try {
            const response = await fetch(`https://courseproject2course-default-rtdb.firebaseio.com/userProducts/${userId}.json`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBasket)
            })

            if (!response.ok) {
                return rejectWithValue('Server Error!')
            }

            return { userId, updatedBasket }
            
        } catch (error) {
            return rejectWithValue(`Network error! ${error}`)
        }
    }
)

export const updateProductQuantity = createAsyncThunk(
    'products/updateProductQuantity',
    async function ({ userId, productId, quantity }, { getState, rejectWithValue }) {
        const { basket } = getState().products
        const userBasket = basket[userId] || []

        const updatedBasket = userBasket.map(product => 
            product.id === productId ? { ...product, quantity } : product
        )

        try {
            const response = await fetch(`https://courseproject2course-default-rtdb.firebaseio.com/userProducts/${userId}.json`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedBasket),
            })

            if (!response.ok) {
                return rejectWithValue('Server Error!')
            }

            return { userId, updatedBasket }

        } catch (error) {
            return rejectWithValue(`Network error! ${error}`)
        }
    }
)



const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [...products], 
        basket: {},
        error: null,
    },
    reducers: {
        updateQuantity(state, action) {
            const { userId, id, quantity } = action.payload
            if (state.basket[userId]) {
                const product = state.basket[userId].find(product => product.id === id)
                if (product) {
                    product.quantity = quantity
                }
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(addProductToBasket.pending, (state) => {
                state.error = null
            })
            .addCase(addProductToBasket.fulfilled, (state, action) => {
                if (action.payload && action.payload.userId) {
                    state.basket[action.payload.userId] = action.payload.updatedBasket
                }
            })
            .addCase(addProductToBasket.rejected, (state, action) => {
                state.error = action.payload
            })

            .addCase(fetchUserProducts.pending, (state) => {
                state.error = null
            })
            .addCase(fetchUserProducts.fulfilled, (state, action) => {
                if (action.payload && action.payload.userId) { 
                    state.basket[action.payload.userId] = action.payload.data
                }
            })
            .addCase(fetchUserProducts.rejected, (state, action) => {
                state.error = action.payload
            })

            .addCase(removeProductFromBasket.pending, (state) => {
                state.error = null
            })
            .addCase(removeProductFromBasket.fulfilled, (state, action) => {
                if (action.payload && action.payload.userId) { 
                    state.basket[action.payload.userId] = action.payload.data
                }
            })
            .addCase(removeProductFromBasket.rejected, (state, action) => {
                state.error = action.payload
            })

            .addCase(updateProductQuantity.pending, (state) => {
                state.error = null
            })
            .addCase(updateProductQuantity.fulfilled, (state, action) => {
                if (action.payload && action.payload.userId) { 
                    state.basket[action.payload.userId] = action.payload.updatedBasket
                }
            })
            .addCase(updateProductQuantity.rejected, (state, action) => {
                state.error = action.payload
            })
    }
})

export const { updateQuantity } = productSlice.actions

export default productSlice.reducer
