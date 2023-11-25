import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Center,
  Text,
  Divider,
  Box,
} from "@chakra-ui/react";
import FormDemo from "./form";
import { FormContactSmall } from "./form-small";

export default function FormModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        rounded={"full"}
        size={"lg"}
        fontWeight={"normal"}
        px={6}
        bg={"#80FFBB"}
        color={"black"}
        _hover={{ bg: "#FFC480" }}
      >
        ¡Quiero saber más!
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
        <ModalOverlay />
        <ModalContent width={{ base: "90%" }}>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <FormContactSmall close={onClose} />
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
