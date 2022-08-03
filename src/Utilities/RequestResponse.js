const axios = require('axios').default;
const axiosInstance = axios.create({
    baseURL: "https://todolistdemobackend.herokuapp.com/api",
    withCredentials: true,
    headers: {
        //"Content-type": "application/json",
        Cookie: "token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTliMWUyZDNmM2E2NDA0ZGQ3Y2M0MyIsImlhdCI6MTY1OTUyNjMyNSwiZXhwIjoxNjU5NjEyNzI1fQ._6RRc19jcOjV_wI71pGpx4M9bEzddUeuroSr8_eiHn8"
    },
});


export {axiosInstance}
