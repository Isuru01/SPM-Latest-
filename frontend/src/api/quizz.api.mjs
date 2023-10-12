import AxiosInstance from "./AxiosInstance.mjs";

const updateQuizz = async (quizz) => {
  const result = await AxiosInstance().put("/quizz", quizz, {
    withCredentials: true,
  });
  return result.data;
};

const fetchQuizzes = async ({ queryKey }) => {
  const result = await AxiosInstance().get(`/quizz`, {
    withCredentials: true,
  });
  return result.data;
};

const fetchQuizz = async ({ queryKey }) => {
  console.log(queryKey);
  const result = await AxiosInstance().get(`/quizz/${queryKey[1]}`, {
    withCredentials: true,
  });
  return result.data;
};

const deleteQuizz = async (assigment) => {
  const result = await AxiosInstance().delete("/quizz", {
    data: assigment,
    withCredentials: true,
  });
  return result.data;
};

export { updateQuizz, fetchQuizzes, deleteQuizz, fetchQuizz };
