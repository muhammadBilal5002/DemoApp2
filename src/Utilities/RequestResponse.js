const axios = require('axios').default;
const axiosInstance = axios.create({
    baseURL: "https://todolistdemobackend.herokuapp.com/api",
    withCredentials: true,
});


export {axiosInstance}
