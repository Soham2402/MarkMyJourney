import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { axiosInstance } from "./AxiosInstance";

export const getAuthTokens = async (username, password) => {
  try {
    const response = await axiosInstance.post("auth/token/", {
      'username': username,
      'password': password
    });

    if (response.status === 200) {
      const data = response.data;
      localStorage.setItem('tokens', JSON.stringify(data))
      localStorage.setItem('username',jwtDecode(data.access).name)
      return data;
    }
    
  } catch (e) {
    console.log("There was an error", e);
  }
};


export const testRequest = async () => {
  try {
    const response = await axiosInstance.get('test/');
    if (response.status === 200) {
      const data = response.data;
      return data;
    } else {
      // If the response status is not 200, handle the error
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error) {
    // Handle the error more gracefully, for example by logging and rethrowing
    console.error('Error in testRequest:', error);
    throw error; // Rethrow the error to propagate it to the caller
  }
};
