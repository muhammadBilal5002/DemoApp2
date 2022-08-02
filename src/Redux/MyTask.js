const { createSlice } = require('@reduxjs/toolkit');

const MyTask = createSlice({
    name: 'MyTask',
    initialState: [],
    reducers: {
        setTask(state, action) {
            if (action.payload.type == "New") {
                return action.payload.task
            }
            else if(action.payload.type == "Created"){
                state.push(action.payload.task)
                console.log(action.payload.task)
                console.log(state)
            }
            else if(action.payload.type == "Updated"){
                state = state.map((task)=>{
                    if(action.payload.id==task._id){
                        task.status = action.payload.status
                        return task
                    }
                    else{
                        return task
                    }
                })
            }
        },
        clearTask(state, action) {
            return []
        },
    },
});

export const { setTask, clearTask } = MyTask.actions;
export default MyTask.reducer;


  
 

// try {
//     const res = await fetch('https://fakestoreapi.com/products');
//     const data = await res.json();
//     dispatch(setTask(data));
// } catch (err) {
//     console.log(err);
// }; 