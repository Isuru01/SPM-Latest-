import axios from "axios";

const AxiosInstance = () => {
  const instance = axios.create({
    baseURL: "http://localhost:8070/api",
    timeout: 3000,
    withCredentials: true,
  });

  return instance;
};

export default AxiosInstance;
