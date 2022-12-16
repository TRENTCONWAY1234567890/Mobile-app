import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    ID: "123456789",
}

export const userSlice = createSlice({
    name: 'user', 
    initialState, 
    reducers: {
        setID: (state, action) => {
            console.log(state);
            console.log(action);
            state.ID = action.payload
        },
    },
})

export const { setID } = userSlice.actions

export default userSlice.reducer
