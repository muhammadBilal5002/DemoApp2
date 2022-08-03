const axios = require('axios').default;
const axiosInstance = axios.create({
    baseURL: "https://todolistdemobackend.herokuapp.com/api",
    crossDomain: true,
    withCredentials: true,
});

//axiosInstance.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
export {axiosInstance}
