import axios from "axios";

export const getAllTask = async () => {
  const res = await axios.get("http://localhost:8080/task");
  return res.data;
};

export const getTaskByStatus = async (status) => {
  const res = await axios.get(
    `http://localhost:8080/task?status=${status}`
  );
  return res.data;
};

export const getAllUser = async () => {
  const res = await axios.get("http://localhost:8080/user");
  return res.data;
};

export const getTaskById=async(id)=>{
  const res = await axios.get(`http://localhost:8080/task/${id}`);
  return res.data;
}

export const getUserById=async(id)=>{
  const res = await axios.get(`http://localhost:8080/user/${id}`);
  return res.data;
}