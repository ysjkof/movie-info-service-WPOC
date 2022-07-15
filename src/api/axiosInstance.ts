import axios from "axios";
import { BASE_URL } from "../constant/constant";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
