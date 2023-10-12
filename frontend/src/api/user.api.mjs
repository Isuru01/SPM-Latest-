import AxiosInstance from "./AxiosInstance.mjs";

const fetchUser = async (user) => {
  const result = await AxiosInstance().get("/user", {
    withCredentials: true,
  });
  return result.data;
};

const saveJob = async (job) => {
  const result = await AxiosInstance().put("/user/savejob", job, {
    withCredentials: true,
  });
  return result.data;
};

const fetchSavedJob = async (user) => {
  const result = await AxiosInstance().get("/user/savejob", {
    withCredentials: true,
  });
  return result.data;
};

export { saveJob, fetchSavedJob, fetchUser };
