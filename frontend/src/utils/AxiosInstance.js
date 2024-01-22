import axios from "axios";
import  {jwtDecode}  from 'jwt-decode';
import  dayjs  from 'dayjs';

let authtoken = localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : null;


const baseURL = 'http://localhost:8001/';

export const axiosInstance = axios.create({
  baseURL,
  headers: { Authorization: `Bearer ${authtoken ? (authtoken).access : ''}` }
});

axiosInstance.interceptors.request.use(async (req) => {
  // if no auth tokens in memory
  if (!authtoken) {
    return req;
  }
  // if auth tokens in memory
  else if (authtoken) {
    console.log("Set hogaya bhai");
    const user = jwtDecode(authtoken.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1; // check if it is expired
    if (!isExpired) {
      req.headers.Authorization = `Bearer ${authtoken.access}`;
      return req; // if it is not expired, send the request
    } else {
      console.log("token is expired");
      try {
        const response = await axios.post(`${baseURL}auth/token/refresh/`, {
          // get new tokens
          refresh: authtoken.refresh,
        });
        localStorage.setItem("tokens", JSON.stringify(response.data));
        authtoken.access = response.data.access; // Update the access token in authtoken variable
        req.headers.Authorization = `Bearer ${response.data.access}`;
        console.log("refresh token updated");
        return req;
      } catch (e) {
        console.log("Error in axiosinstance.js: ", e);
      }
    }
  }
});
