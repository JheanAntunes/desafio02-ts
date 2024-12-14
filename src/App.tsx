import { ChakraProvider } from "@chakra-ui/react";
import FormLogin from "./components/form-login";

function App() {
  return (
    <ChakraProvider>
      <FormLogin />
    </ChakraProvider>
  );
}

export default App;
