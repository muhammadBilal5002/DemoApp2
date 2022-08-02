const { createSlice } = require('@reduxjs/toolkit');

const AllUser = createSlice({
    name: 'AllUser',
    initialState: {data:[],current:[]},
    reducers: {
        setUser(state, action) {
            if (action.payload.type == "New") {
                state.data = action.payload.users
            }
            if(action.payload.type == "Current"){
                const current = state.data.filter((user)=>{
                    if(user._id==action.payload.id){
                        return user 
                    }
                })
                state.current = current
            }
            else if(action.payload.type == "Updated"){
                state.current[0].task = state.current[0].task.map((task)=>{
                    if(action.payload.id==task._id){
                        task.remarks = action.payload.remarks
                        return task
                    }
                    else{
                        return task
                    }
                })
            }
           
        },
        clearUser(state, action) {
            return {data:[],current:[]}
        },
    },
});

export const { setUser, clearUser } = AllUser.actions;
export default AllUser.reducer;
