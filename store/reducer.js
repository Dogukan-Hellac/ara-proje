import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'slice',
    initialState: {
        searchInput: true,
        toggleMenu: true
    },
    reducers: {
        setToggleInput: (state) => {
            state.searchInput = !state.searchInput
        },
        setToggleMenu: (state, action) => {
            state.toggleMenu = action.payload
        }
    }
})

export const { setToggleInput, setToggleMenu } = counterSlice.actions
export default counterSlice.reducer