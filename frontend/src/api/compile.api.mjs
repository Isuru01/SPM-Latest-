import AxiosInstance from "./AxiosInstance.mjs";

const compile = async (code) => {
  const result = await AxiosInstance().post(
    "/compile",
    { code: code },
    {
      withCredentials: true,
    }
  );
  return result.data;
};

export { compile };
