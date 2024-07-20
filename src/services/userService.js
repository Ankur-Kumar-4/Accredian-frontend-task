import axiosInstance from "./axiosInstance";

const registerUser = async (userData) => {
  try {
    console.log(process.env.BASE_API_URL)
    const response = await axiosInstance.post("/user/register", userData);
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    console.error("Error fetching all chats:", error);
    throw error;
  }
};
const loginUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/user/login", userData);
    localStorage.setItem("token", response.data.token);
  } catch (error) {
    console.error("Error fetching all chats:", error);
    throw error;
  }
};

const userService = {
  registerUser,
  loginUser,
};

export default userService;
