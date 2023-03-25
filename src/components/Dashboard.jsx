import {
  Box,
  Button,
  FormLabel,
  Heading,
  Select,
  TagLabel,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Task from "./Task";
import { getAllTask, getTaskByStatus } from "../api/api";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [allTask, SetAllTask] = useState([]);

  const [del, setDel] = useState(false);

  useEffect(() => {
    getAllTask().then((res) => SetAllTask(res));
  }, [del]);

  const [progressTask, SetProgressTask] = useState([]);
  const [doneTask, SetDoneTask] = useState([]);

  useEffect(() => {
    getTaskByStatus("In_Progress").then((res) => SetProgressTask(res));
    getTaskByStatus("Done").then((res) => SetDoneTask(res));
  }, [del]);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/");
  }

  return (
    <Box>
      <br />
      <Heading textAlign={"center"}>Dashboard</Heading>
      <br />
      {allTask.length > 0 ? (
        <Box
          width={"90%"}
          margin={"auto"}
          display={"grid"}
          gridTemplateColumns={"repeat(3,1fr)"}
          gap={10}
        >
          <Box
            bg={"skyblue"}
            color={"white"}
            padding={3}
            borderRadius={"md"}
            height={"max-content"}
          >
            <Heading size={"md"} textAlign={"center"}>
              Every Task
            </Heading>
            <br />
            <Box display={"grid"} gap={3}>
              {allTask.map((ele, i) => (
                <Task key={i} ele={ele} setDel={setDel} />
              ))}
            </Box>
          </Box>
          <Box
            bg={"orange"}
            color={"white"}
            padding={3}
            borderRadius={"md"}
            height={"max-content"}
          >
            <Heading size={"md"} textAlign={"center"}>
              In Progress Task
            </Heading>
            <br />
            <Box display={"grid"} gap={3}>
              {progressTask.map((ele, i) => (
                <Task key={i} ele={ele} setDel={setDel} />
              ))}
            </Box>
          </Box>
          <Box
            bg={"#47C31A"}
            color={"white"}
            padding={3}
            borderRadius={"md"}
            height={"max-content"}
          >
            <Heading size={"md"} textAlign={"center"}>
              Done Task
            </Heading>
            <br />
            <Box display={"grid"} gap={3}>
              {doneTask.map((ele, i) => (
                <Task key={i} ele={ele} setDel={setDel} />
              ))}
            </Box>
          </Box>
        </Box>
      ) : (
        <Box>
          <Button
            display={"block"}
            margin={"auto"}
            colorScheme="whatsapp"
            onClick={() => navigate("/task/add")}
          >
            Add Task to Show on Dashboard
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
