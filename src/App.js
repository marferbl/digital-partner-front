import { Flex } from "@chakra-ui/react";
import InitialPage from "./pages/start/initial-page";
import { PageRoutes } from "./routes";
import "./index.css"
import Navbar from "./components/base/navbar";

function App() {

  return (
    <Flex
      justify={"center"}
      align={"center"}
      minH={"100vh"}
      gap={5}
      bg={"black"}
      style={{
        backgroundImage: "url('/logos/logo-static-yellow.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <InitialPage />
    </Flex>

  );
}

export default App;
