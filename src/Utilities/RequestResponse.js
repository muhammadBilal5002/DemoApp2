const axios = require('axios').default;
const axiosInstance = axios.create({
    baseURL: "https://todolistdemobackend.herokuapp.com/api",
    withCredentials: true,
    headers: {
         "Content-type": "application/json",
    },
});


export {axiosInstance}
