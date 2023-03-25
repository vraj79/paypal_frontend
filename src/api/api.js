import axios from "axios";

export const getAllTask = async () => {
  const res = await axios.get("https://wild-mite-shrug.cyclic.app/task");
  return res.data;
};

export const getTaskByStatus = async (status) => {
  const res = await axios.get(
    `https://wild-mite-shrug.cyclic.app/task?status=${status}`
  );
  return res.data;
};

export const getAllUser = async () => {
  const res = await axios.get("https://wild-mite-shrug.cyclic.app/user");
  return res.data;
};

export const getTaskById = async (id) => {
  const res = await axios.get(`https://wild-mite-shrug.cyclic.app/task/${id}`);
  return res.data;
};

export const getUserById = async (id) => {
  const res = await axios.get(`https://wild-mite-shrug.cyclic.app/user/${id}`);
  return res.data;
};
