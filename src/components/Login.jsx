import {
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Text,
    useToast,
    VStack,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import axios from "axios";
  import { useNavigate } from "react-router-dom";

  export const Login=()=> {
    const [show, setShow] = useState(false);
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const toast = useToast();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleSubmit = async () => {
      setLoading(true);
      if (!email || !password) {
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
      try {
        const res=await axios.post("https://wild-mite-shrug.cyclic.app/user/login",{email,password})
        console.log(res)
        if(res.status===200){
            toast({
              title: "Login Successful!",
              status: "success",
              duration: 5000,
              isClosable: true,
              position: "bottom",
            });
            navigate("/dashboard");
        }
        localStorage.setItem("token", JSON.stringify(res.data.token));
        setLoading(false);
      } catch (err) {
        toast({
          title: "Invalid Credential or Signup First!",
          status: err.response.data.message,
          duration: 5000,
          isClosable: true,
          position: "top",
        });
        setLoading(false);
      }
    };
    const handleClick = () => setShow(!show);

    return (
      <VStack spacing={"5px"}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            border={"1px grey solid"}
            placeholder="Enter Your Email"
            value={email}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width={"4.5rem"}>
              <Button h={"1.75rem"} size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <Button
        //   bg={"#1082CB"}
          colorScheme="whatsapp"
        //   _hover={{ bg: "#1082CB", color: "white" }}
          width="100%"
          style={{ marginTop: 15 }}
          onClick={handleSubmit}
        //   isLoading={loading}
        >
          Login
        </Button>
      </VStack>
    );
  }
  