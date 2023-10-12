import AxiosInstance from "./AxiosInstance.mjs";

const updateTask = async (task) => {
  const result = await AxiosInstance().put("/task", task, {
    withCredentials: true,
  });
  return result.data;
};

const fetchTasks = async ({ queryKey }) => {
  const result = await AxiosInstance().get(`/task?aid=${queryKey[1]}`, {
    withCredentials: true,
  });
  return result.data;
};

const fetchTask = async ({ queryKey }) => {
  const result = await AxiosInstance().get(`/task/${queryKey[1]}`, {
    withCredentials: true,
  });
  return result.data;
};

const deleteTask = async (task) => {
  console.log(task);
  const result = await AxiosInstance().delete("/task", {
    data: task,
    withCredentials: true,
  });
  return result.data;
};
export { updateTask, fetchTask, fetchTasks, deleteTask };
