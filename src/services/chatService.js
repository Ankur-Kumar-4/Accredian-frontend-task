import axiosInstance from "../services/axiosInstance";

const getAllChats = async (page = 1) => {
  try {
    const response = await axiosInstance.get("/get_all_chats", {
      params: { page },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching all chats:", error);
    throw error;
  }
};

const getChatMessages = async (chatId) => {
  try {
    const response = await axiosInstance.get("/get_chat_messages", {
      params: { chat_id: chatId },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching chat messages:", error);
    throw error;
  }
};

const chatService = {
  getAllChats,
  getChatMessages,
};

export default chatService;
