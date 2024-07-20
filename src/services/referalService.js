import axiosInstance from "./axiosInstance";

const referalService = async (fromData) => {
  try {
    const response = await axiosInstance.post("/referral", fromData);
    return response.data;
  } catch (error) {
    console.error("Error fetching all chats:", error);
    throw error;
  }
};

export default referalService;
