import { configureStore } from '@reduxjs/toolkit';
import LoginSystem from './LoginOrNot';
import MyTask from './MyTask';
import AllUser from './AllUser';
import OverPage from './OverPage';
const store = configureStore({
    reducer: {
        loginornot: LoginSystem,
        mytask: MyTask,
        overpage: OverPage,
        allusers: AllUser,
    },
});

export default store;