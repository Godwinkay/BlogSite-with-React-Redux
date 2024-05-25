import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: '0', author: 'Chimamanda Adichie Ngozie'},
    {id: '1', author: 'Mark Mason'},
    {id: '2', author: 'Godwin Ahiable'},
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export const allSelectedUsers = (state) => state.users

export default usersSlice.reducer