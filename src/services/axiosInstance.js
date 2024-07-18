import axios from "axios";

// Create an instance of axios with default configuration
const axiosInstance = axios.create({
  baseURL: process.env.BASE_API_URL, // Base URL for the API
  headers: {
    "Content-Type": "application/json", // Default content type for all requests
  },
});

// Request interceptor to add authorization token to each request
axiosInstance.interceptors.request.use(
  (config) => {
    // Get the token from local storage
    const token = localStorage.getItem("token");
    // If token exists, add it to the request headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Handle the error before it is sent
    return Promise.reject(error);
  }
);

// Response interceptor to handle responses and errors
axiosInstance.interceptors.response.use(
  (response) => {
    // Return the response data if the request was successful
    return response;
  },
  (error) => {
    // Handle specific error responses
    if (error.response) {
      if (error.response.status === 401) {
        // Handle unauthorized error (e.g., redirect to login page)
        console.log("Unauthorized access - redirecting to login");
        // Optionally, you can redirect to the login page or show a notification
      } else if (error.response.status === 403) {
        // Handle forbidden error (e.g., show access denied message)
        console.log("Access denied");
      } else if (error.response.status >= 500) {
        // Handle server errors
        console.log("Server error - please try again later");
      }
    } else if (error.request) {
      // Handle no response received from server
      console.log(
        "No response from server - please check your network connection"
      );
    } else {
      // Handle other errors
      console.log("Error", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
