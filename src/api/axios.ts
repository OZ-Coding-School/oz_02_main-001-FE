import axios, { AxiosResponse } from "axios";

const customAxios = (() =>
  axios.create({
    baseURL: "/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
  }))();

export const fetchData = async <T>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  endpoint: string,
  data?: T,
): Promise<T> => {
  try {
    let response: AxiosResponse<T>;
    switch (method) {
      case "GET":
        response = await customAxios.get(endpoint);
        break;
      case "POST":
        response = await customAxios.post<T>(endpoint, data);
        break;
      case "PUT":
        response = await customAxios.put<T>(endpoint, data);
        break;
      case "DELETE":
        response = await customAxios.delete<T>(endpoint);
        break;
      default:
        throw new Error("Invalid HTTP method");
    }
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || error.message || "An unknown error occurred");
  }
};
