import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async function(_, { rejectWithValue }) {

        try {
            const response = await fetch('https://courseproject2course-default-rtdb.firebaseio.com/users.json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            
            })

            if (!response.ok) {
                return rejectWithValue('Server Error!')
            }

            const data = await response.json()

            const users = Object.keys(data).map(key => ({ ...data[key], id: key }))

            return users

        } catch (error) {
            return rejectWithValue(`Network Error! ${error}`)
        }
    }
)

export const createUser = createAsyncThunk(
    'user/createUser',
    async function({ userId, email, username, surname, phone }, { rejectWithValue }) {
        const user = {
            userId,
            email,
            username,
            surname,
            phone,
        }

        try {
            const response = await fetch('https://courseproject2course-default-rtdb.firebaseio.com/users.json', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })

            if (!response.ok) {
                return rejectWithValue('Server Error!')
            }

            const data = await response.json()

            return { ...user, id: data.name }

        } catch (error) {
            return rejectWithValue(`Network Error! ${error}`)
        }
    }
)

const initialState = {
    users: [],
    email: null,
    token: null,
    id: null,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            state.email = action.payload.email
            state.token = action.payload.token
            state.id = action.payload.id
        },
        removeUser(state) {
            state.email = null
            state.token = null
            state.id = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.error = null
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.error = action.payload
            })

            .addCase(createUser.pending, (state) => {
                state.error = null
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.users.push(action.payload)
            })
            .addCase(createUser.rejected, (state, action) => {
                state.error = action.payload
            }) 
    }
    
})

export const { setUser, removeUser } = userSlice.actions

export default userSlice.reducer