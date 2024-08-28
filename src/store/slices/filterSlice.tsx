import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type FilterSlice = 'all' | 'active' | 'completed';
interface InitialState{
    value: FilterSlice;
}
const initialState: InitialState = {
    value: 'all'
}

const filter = createSlice({
    name: "filterSlice",
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<FilterSlice>) => {
            state.value = action.payload;
        }
    }
})

export const {setFilter} = filter.actions;

export default filter.reducer;