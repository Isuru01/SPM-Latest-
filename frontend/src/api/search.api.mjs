import AxiosInstance from "./AxiosInstance.mjs";

const searchJobs = async ({ queryKey }) => {
  const params = new URLSearchParams(queryKey[1]);

  const result = await AxiosInstance().get(`/search?${params.toString()}`, {
    withCredentials: true,
  });
  return result.data;
};

export { searchJobs };
