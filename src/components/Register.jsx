import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [confirmpassword, setConfirmpassword] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const navigate = useNavigate();

  const handleSubmit = async () => {
    setLoading(true);
    if (!name || !email || !password || !confirmpassword) {
      toast({
        title: "Please Fill all the Fields!",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }
    if (password !== confirmpassword) {
      toast({
        title: "Password Do Not Match!",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const res = await axios.post(
        `https://wild-mite-shrug.cyclic.app/user/register`,
        { name, email, password },
        config
      );
      console.log(res)
      if(res.data==="user already exists"){
        window.location.reload()
        toast({
          title: "User already exists",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        return
      }
      toast({
        title: "Registration Successful!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("token", JSON.stringify(res.data.token));
      localStorage.setItem("name", JSON.stringify(res.data.user.name));
      setLoading(false);
      navigate("/dashboard");
    } catch (err) {
      toast({
        title: "Error Occured!",
        status: err.message,
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  const handleClick = () => setShow(!show);
  const handleClick1 = () => setShow1(!show1);
  return (
    <VStack spacing={"5px"}>
      <FormControl id="first-name" isRequired color={"black"}>
        <FormLabel>Name</FormLabel>
        <Input
          border={"1px grey solid"}
          placeholder="Enter Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </FormControl>
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          border={"1px grey solid"}
          placeholder="Enter Your Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup size={"md"}>
          <Input
            border={"1px grey solid"}
            type={show ? "text" : "password"}
            placeholder="Enter Your Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <FormControl id="confirmpassword" isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <InputGroup size={"md"}>
          <Input
            border={"1px grey solid"}
            type={show1 ? "text" : "password"}
            placeholder="Enter Confirm Password"
            name="confirmpassword"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size="sm" onClick={handleClick1}>
              {show1 ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
      <Button
        bg={"#0B96E2"}
        color="white"
        _hover={{ bg: "#0B96E2", color: "white" }}
        width="100%"
        style={{ marginTop: 15 }}
        onClick={handleSubmit}
        isLoading={loading}
      >
        Register
      </Button>
    </VStack>
  );
};
