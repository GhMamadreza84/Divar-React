import api from "../configs/api";

const addCateGory = async (categoryData) => {
  try {
    const response = await api.post("/category");
    return Response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error adding category");
  }
};
