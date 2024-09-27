import api from "../configs/api";

const addCateGory = async (categoryData) => {
  try {
    const response = await api.post("/category", categoryData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Error adding category");
  }
};

const getCategory = async () => {
  try {
    const response = await api.get("/category");
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Error fetching categories"
    );
  }
};

export { addCateGory, getCategory };
