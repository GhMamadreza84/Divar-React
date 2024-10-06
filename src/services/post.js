import api from "js-cookie";

const addPost = async (postData) => {
  try {
    const response = await api.post("/post", postData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error adding post");
  }
};

const getPost = () => api.get("");

export { addPost, getPost };
