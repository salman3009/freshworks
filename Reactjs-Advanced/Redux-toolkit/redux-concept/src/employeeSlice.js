import {createSlice} from '@reduxjs/toolkit';

const initialState={
    fullName:"Salman G"
}

export const employeeSlice = createSlice({
     name:'employee',
     initialState,
     reducers:{
        employeeNameUpdate:(state,action)=>{
            state.fullName = action.payload;
        }
     }
})

export const {employeeNameUpdate} = employeeSlice.actions;

export default employeeSlice.reducer;