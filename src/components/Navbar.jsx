import { Box, useToast } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const name = localStorage.getItem("name");
  const toast = useToast();
  const handleLogout = () => {
    localStorage.clear();
    toast({
      title: "Logged Out",
      status: "success",
      duration: 1900,
      isClosable: true,
      position: "bottom",
    });
    setTimeout(() => {
        window.location.reload();
    }, 2000);
  };
  return (
    <Box
      bg={"#2874F9"}
      color={"whitesmoke"}
      fontSize={"1.5rem"}
      display={"flex"}
      justifyContent={"space-between"}
      padding={4}
    >
      <Box>
        <ul>
          <Link to={"/dashboard"}>myJira</Link>
        </ul>
      </Box>
      <Box display={"flex"} gap={20}>
        <ul>
          <Link to={"/dashboard"}>Dashboard</Link>
        </ul>
        <ul>
          <Link to={"/task/add"}>Add Task</Link>
        </ul>
        <ul onClick={handleLogout} style={{ textTransform: "capitalize" }}>
          {name}
        </ul>
      </Box>
    </Box>
  );
};

export default Navbar;
