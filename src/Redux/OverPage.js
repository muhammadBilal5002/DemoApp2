const { createSlice } = require('@reduxjs/toolkit');

const MyTask = createSlice({
    name: 'MyTask',
    initialState: {on:false,user:true,data:[]},
    reducers: {
        setOverPage(state, action) {
            state.on = action.payload.on
            state.user = action.payload.user
            state.data = action.payload.data
        }
    },
});

export const { setOverPage } = MyTask.actions;
export default MyTask.reducer;
