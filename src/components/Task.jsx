import {
  Box,
  Button,
  FormLabel,
  Heading,
  Select,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserById } from "../api/api";
import axios from "axios";
const Task = ({ ele, setDel }) => {
  const navigate = useNavigate();

  const [user, SetUser] = useState({});

  useEffect(() => {
    getUserById(ele.assignedTo).then((res) => SetUser(res));
  }, []);

  const toast = useToast();

  const delTask = async (id) => {
    await axios.delete(`https://wild-mite-shrug.cyclic.app/task/${id}`);
    toast({
      title: "Task Deleted.Plz wait for a sec",
      status: "success",
      duration: 1000,
      isClosable: true,
      position: "bottom",
    });
    setDel((prev) => !prev);
  };

  return (
    <Box
      display={"grid"}
      gap={3}
      padding={2}
      border={"1px solid black"}
      borderRadius={"md"}
    >
      <Heading size={"sm"}>Task Name: {ele.taskName}</Heading>
      <Heading size={"xs"}>Description: {ele.description}</Heading>
      <Box>
        <FormLabel>Task Status</FormLabel>
        <Select color={"black"} onChange={() => {}} value={ele.status}>
          <option value="">Select</option>
          <option value="In_Progress">In progress</option>
          <option value="Done">Done</option>
        </Select>
      </Box>
      <Box>
        <FormLabel>Task Type</FormLabel>
        <Select onChange={() => {}} color={"black"} value={ele.taskType}>
          <option value="">Select</option>
          <option value="Bug">Bug</option>
          <option value="Feature">Feature</option>
          <option value="Story">Story</option>
        </Select>
      </Box>
      <Box>
        <FormLabel>Sprint</FormLabel>
        <Select onChange={() => {}} color={"black"} value={ele.sprint}>
          <option value="">Select</option>
          <option value="sprint1">Sprint 1</option>
          <option value="sprint2">Sprint 2</option>
          <option value="sprint3">Sprint 3</option>
          <option value="sprint4">Sprint 4</option>
        </Select>
      </Box>
      <Box>
        <FormLabel>Assigned User</FormLabel>
        <Select onChange={() => {}} color={"black"} value={ele.assignedTo}>
          <option value="">{user.name}</option>
        </Select>
      </Box>
      <Box display={"flex"} justifyContent={"space-around"}>
        <Button
          onClick={() => navigate(`/task/${ele._id}`)}
          colorScheme="blackAlpha"
        >
          View or Edit Task
        </Button>
        <Button onClick={() => delTask(ele._id)} colorScheme="blackAlpha">
          Delete Task
        </Button>
      </Box>
    </Box>
  );
};

export default Task;
