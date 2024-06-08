import axios, { AxiosResponse } from "axios";

const customAxios = (() =>
  axios.create({
    baseURL: "/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
  }))();

// GET 요청 함수
export const getData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await customAxios.get(endpoint);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("An unknown error occurred");
  }
};

// POST
export const postData = async <T>(endpoint: string, data: T): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await customAxios.post(endpoint, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("An unknown error occurred");
  }
};

// PUT
export const putData = async <T>(endpoint: string, data: T): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await customAxios.put(endpoint, data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("An unknown error occurred");
  }
};

// DELETE
export const deleteData = async <T>(endpoint: string): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await customAxios.delete(endpoint);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || error.message);
    }
    throw new Error("An unknown error occurred");
  }
};
