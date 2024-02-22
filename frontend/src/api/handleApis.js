import axios from "axios";

const handleApis = axios.create({
  withCredentials: true, //to store cookie on browser
  baseURL: "http://localhost:5001/api/users",
});

export const getUser = async () => {
  const res = await handleApis.get("/user-info");
  const data = await res.data;
  return data;
};

export const login = async (input) => {
  try {
    const res = await handleApis.post(`/login`, input);
    const data = await res.data;
    return data;
  } catch (error) {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 400
    ) {
      console.log(error);
    }
  }
};

export const register = async (input) => {
  try {
    const res = await handleApis.post(`/register`, input);
    const data = await res.data;
    console.log("data is", data);
    return data;
  } catch (error) {
    if (
      error.response &&
      error.response.status >= 400 &&
      error.response.status <= 400
    ) {
      console.log(error.response.data.message);
      throw new Error(error.response.data.message);
    }
  }
};

export const logout = async () => {
  const res = await handleApis.get("/logout");
  const data = await res.data;
  return data;
};
