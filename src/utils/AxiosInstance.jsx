import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://purely-current-lamprey.ngrok-free.app",
});
