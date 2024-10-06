import api from "../configs/api";

const addPost = async (postData) => {
  try {
    const response = await api.post("/create", postData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error adding post");
  }
};

const getPost = async () => {
  try {
    const response = api.get("");
    return response;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error in Getting All Post"
    );
  }
};

export { addPost, getPost };
