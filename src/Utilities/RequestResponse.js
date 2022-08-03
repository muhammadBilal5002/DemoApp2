const axios = require('axios').default;
const axiosInstance = axios.create({
    baseURL: "https://todolistdemobackend.herokuapp.com/api",
    withCredentials: true,
});

axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
export {axiosInstance}
