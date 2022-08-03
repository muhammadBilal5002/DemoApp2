const axios = require('axios').default;
const axiosInstance = axios.create({
    baseURL: "https://todolistdemobackend.herokuapp.com/api",
    crossDomain: true,
    withCredentials: true,
});

//axiosInstance.defaults.headers.common['Cookie'] = 'token=sadsadafsdfsdfsfdfsdfsdasd'
export {axiosInstance}
