import { Box, FormLabel, Heading, Select } from "@chakra-ui/react";
import React from "react";

const Task = ({ele}) => {
  return (
    <Box display={"grid"} gap={3} padding={2} border={"1px solid green"} borderRadius={"md"}>
      <Heading size={"sm"}>Task Name: {ele.taskName}</Heading>
      <Box>
        <FormLabel>Task Status</FormLabel>
        <Select color={"black"} value={ele.status}>
          <option value="">Select</option>
          <option value="In_Progress">In progress</option>
          <option value="Done">Done</option>
        </Select>
      </Box>
      <Box>
        <FormLabel>Task Type</FormLabel>
        <Select color={"black"} value={ele.taskType}>
          <option value="">Select</option>
          <option value="Bug">Bug</option>
          <option value="Feature">Feature</option>
          <option value="Story">Story</option>
        </Select>
      </Box>
      <Box>
        <FormLabel>Sprint</FormLabel>
        <Select color={"black"} value={ele.sprint}>
          <option value="">Select</option>
          <option value="sprint1">Sprint 1</option>
          <option value="sprint2">Sprint 2</option>
          <option value="sprint3">Sprint 3</option>
          <option value="sprint4">Sprint 4</option>
        </Select>
      </Box>
    </Box>
  );
};

export default Task;
