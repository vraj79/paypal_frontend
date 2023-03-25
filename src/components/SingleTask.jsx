import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAllUser, getTaskById } from "../api/api";
import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Select,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const SingleTask = () => {
  const { id } = useParams();

  const [taskName, SetTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [taskType, setTaskType] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [sprint, setSprint] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    getTaskById(id).then((res) => {
      SetTaskName(res.taskName);
      setDescription(res.description);
      setTaskType(res.taskType);
      setAssignedTo(res.assignedTo);
      setSprint(res.sprint);
      setStatus(res.status);
    });
  }, []);

  const [allUser, SetAllUser] = useState([]);

  useEffect(() => {
    getAllUser().then((res) => SetAllUser(res));
  }, []);

  const navigate = useNavigate();
  const toast=useToast()

  const updateTask = async () => {
    const data = {
      taskName,
      description,
      taskType,
      assignedTo,
      sprint,
      status,
    };

    const res = await axios.patch(`http://localhost:8080/task/${id}`, data);
    if (res.status === 200) {
      toast({
        title: "Task is Updating.Plz wait for a sec",
        status: "success",
        duration: 1900,
        isClosable: true,
        position: "bottom",
      });
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  };

  return (
    <Box>
      <Box
        bg={""}
        height={"100vh"}
        gap={3}
        p={1}
        width={"95%"}
        margin={"auto"}
        display={"grid"}
        padding={3}
        border={"1px solid black"}
        borderRadius={"md"}
      >
        <Heading textAlign={"center"}>Edit Task</Heading>
        <Box>
          <FormLabel>Task Name</FormLabel>
          <Input
            value={taskName}
            onChange={(e) => SetTaskName(e.target.value)}
          />
        </Box>
        <Box>
          <FormLabel>Description</FormLabel>
          <Input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>
        <Box>
          <FormLabel>Task Status</FormLabel>
          <Select
            color={"black"}
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <option value="">Select</option>
            <option value="In_Progress">In progress</option>
            <option value="Done">Done</option>
          </Select>
        </Box>
        <Box>
          <FormLabel>Task Type</FormLabel>
          <Select
            color={"black"}
            onChange={(e) => setTaskType(e.target.value)}
            value={taskType}
          >
            <option value="">Select</option>
            <option value="Bug">Bug</option>
            <option value="Feature">Feature</option>
            <option value="Story">Story</option>
          </Select>
        </Box>
        <Box>
          <FormLabel>Sprint</FormLabel>
          <Select
            onChange={(e) => setSprint(e.target.value)}
            color={"black"}
            value={sprint}
          >
            <option value="">Select</option>
            <option value="sprint1">Sprint 1</option>
            <option value="sprint2">Sprint 2</option>
            <option value="sprint3">Sprint 3</option>
            <option value="sprint4">Sprint 4</option>
          </Select>
        </Box>
        <Box>
          <FormLabel>Assigned User</FormLabel>
          <Select
            onChange={(e) => setAssignedTo(e.target.value)}
            color={"black"}
            value={assignedTo}
          >
            <option value="">Select</option>
            {allUser?.map((ele) => (
              <option value={ele._id} key={ele._id}>
                {ele.name}
              </option>
            ))}
          </Select>
        </Box>
        <Box>
          <Button
            onClick={updateTask}
            display={"block"}
            margin={"auto"}
            colorScheme="whatsapp"
          >
            Make Changes
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleTask;
