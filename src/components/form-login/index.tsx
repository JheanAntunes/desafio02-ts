import { Box, Center, Input } from "@chakra-ui/react";
import React from "react";
import Button from "../ui/button";
import { login } from "../../services/login";

const FormLogin = () => {
  return (
    <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
      <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" />
        <Input placeholder="password" />
        <Center>
          <Button onClick={login}>Button</Button>
        </Center>
      </Box>
    </Box>
  );
};

export default FormLogin;
