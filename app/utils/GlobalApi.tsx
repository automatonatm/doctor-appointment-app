import axios, { AxiosInstance } from "axios";

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
const baseURL = process.env.NEXT_PUBLIC_API_URL;

const axiosClient: AxiosInstance = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const getCategories = async () => {
  try {
    const response = await axiosClient.get("/categories?populate=*");
    return response.data;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};

export const getDoctors = async () => {
  try {
    const response = await axiosClient.get("/doctors?populate=*");
    return response.data;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};


export const getDoctorById = async (id: number) => {
  try {
    const response = await axiosClient.get(`/doctors/${id}?populate=*`);
    return response.data;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};

export const getDoctorsByCategories = async (category: string) => {
  try {
    const response = await axiosClient.get(
      `/doctors?filters[categories][Name][$in]=${category}&populate=*`,
    );
    return response.data;
  } catch (err: any) {
    console.log(err);
    throw new Error(err);
  }
};
