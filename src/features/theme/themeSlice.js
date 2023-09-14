
import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    color: "",
}

export const themeSlice = createSlice({
    name:"colorReducer",
    initialState,
    reducers:{
        theme: (state, action) => {
            state.color = action.payload
          },
    }
})

export const {theme} = themeSlice.actions;
export default themeSlice.reducer;