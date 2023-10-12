import AxiosInstance from "./AxiosInstance.mjs";

const updateAssigment = async (assigment) => {
  console.log(assigment);

  const result = await AxiosInstance().put(
    `/assigment/${assigment.aid}`,
    assigment,
    {
      withCredentials: true,
    }
  );
  return result.data;
};

const getAssigmentAnalysis = async ({ queryKey }) => {
  const result = await AxiosInstance().get(
    `/assigment/analysis/${queryKey[1]}`,
    {
      withCredentials: true,
    }
  );

  return result.data;
};

const createAssigment = async (assigment) => {
  const result = await AxiosInstance().post(`/assigment`, assigment, {
    withCredentials: true,
  });

  return result.data;
};

const fetchAssigment = async ({ queryKey }) => {
  console.log(queryKey[1]);
  const result = await AxiosInstance().get(`/assigment/${queryKey[1]}`, {
    withCredentials: true,
  });

  console.log(result);
  return result.data;
};

const fetchAssigments = async ({ queryKey }) => {
  const result = await AxiosInstance().get(`/assigment`, {
    withCredentials: true,
  });
  return result.data;
};

const deleteAssigment = async (assigment) => {
  const result = await AxiosInstance().delete("/assigment", {
    data: assigment,
    withCredentials: true,
  });
  return result.data;
};

const fetchUserCode = async ({ queryKey }) => {
  console.log("Call");
  const result = await AxiosInstance().get(`/assigment/code/${queryKey[1]}`, {
    withCredentials: true,
  });

  return result.data;
};

const submitUserCode = async (assigment) => {
  const result = await AxiosInstance().post(
    `/assigment/code/${assigment.aid}`,
    assigment,
    {
      withCredentials: true,
    }
  );

  return result.data;
};

export {
  fetchUserCode,
  submitUserCode,
  getAssigmentAnalysis,
  updateAssigment,
  createAssigment,
  fetchAssigment,
  fetchAssigments,
  deleteAssigment,
};
