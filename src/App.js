import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import InitialPage from "./pages/start/initial-page";
import { PageRoutes } from "./routes";

function App() {
  
  return (
    <Flex justify={"center"} align={"center"} minH={"100vh"} gap={5} bg={'#fcfdfe'}>
      <InitialPage />
    </Flex>
  );
}

export default App;
