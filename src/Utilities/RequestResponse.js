const axios = require('axios').default;
const axiosInstance = axios.create({
    baseURL: "http://localhost:30124/api",
    withCredentials: true,
    headers: {
        "Content-type": "application/json",
    },
});


export {axiosInstance}
