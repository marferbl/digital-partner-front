import { Flex } from "@chakra-ui/react";
import InitialPage from "./pages/start/initial-page";
import "./index.css";

function App() {
  return (
    <Flex
      justify={"center"}
      align={"center"}
      minH={"100vh"}
      gap={5}
      bg={"black"}
      position="relative"
      overflow="hidden" // Ensure the video does not overflow the container
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Ensures the video covers the container
          zIndex: 0,
          opacity: 1, // Adjust for brightness
        }}
      >
        <source src={'/videos/login-video.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <Flex
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.7)" // Adjust overlay transparency
        zIndex={1}
      />

      {/* Main Content */}
      <Flex zIndex={2}>
        <InitialPage />
      </Flex>
    </Flex>
  );
}

export default App;
