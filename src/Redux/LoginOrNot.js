const { createSlice } = require('@reduxjs/toolkit');

const LoginSystem = createSlice({
    name: 'LoginOrNot',
    initialState: {login:false, Role:"User"},
    reducers: {
        setLogin(state, action) {
            if(action.payload == "login"){
                state.login=true
            }
            else{
                state.login=false
            }
        },
        setRole(state, action) {
            state.Role = action.payload
        },
    },
});

export const { setLogin, setRole } = LoginSystem.actions;
export default LoginSystem.reducer;