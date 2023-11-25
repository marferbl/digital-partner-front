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

export default function FeatureModal({ image, title }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const FEATURES = {
    Profesional: [
      "Asesoría de búsqueda de empleo: CV + LinkedIn + Carta de presentación.",
      "Filtrado y negociación de ofertas de empleo que reciben.",
      "Eventos de networking (comunidad).",
      "Asesoría formativa.",
      "Formación (pequeños cursos y foros de debate).",
      "Portfolio y GitHub.",
    ],
    Empresa: [
      "Consultoría de recursos humanos.",
      "Evaluación de plantilla y realización de pruebas técnicas de acceso.",
      "Pruebas técnicas para concurso/oposición de instituciones públicas.",
    ],
    "Centro formativo": [
      "Talleres de CV + LinkedIn.",
      "Orientación académica y profesional.",
      "Charlas con profesionales del sector.",
      "Speed dating salidas laborales.",
      "Eventos de networking (empresas + alumnos).",
    ],
  };

  const description = (type) => {
    const result = {
      Profesional:
        "¿Buscando un cambio laboral pero harto de ofertas que ni te interesan ni se ajustan a tu perfil? ¡Te estamos esperando!",
      Empresa:
        "¿Estás buscando digitalizar tu compañía con los mejores profesionales del sector? ¡Podemos ayudarte!",
      "Centro formativo":
        "¿Quieres orientar a tus alumnos hacia su primera experiencia profesional? ¡Nosotros nos encargamos!",
    };
    return result[type];
  };

  return (
    <>
      <Button
        onClick={onOpen}
        color={"black"}
        bg={"#fff3e6"}
        size={"sm"}
        _hover={{ bg: "#FFC480" }}
      >
        Ver más
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent width={{ base: "90%" }}>
          <ModalHeader>
            <Center>{image}</Center>
          </ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight={"bold"} fontSize={20} mb={3}>
              {title}
            </Text>

            <Text fontSize={14}>{description(title)}</Text>
            <Text fontSize={14} mt={5}>
              Como <strong>{title.toLowerCase()} </strong>obtendrás:
            </Text>
            <Box textAlign={"justify"} px={3} py={3}>
              <ul>
                {FEATURES[title].map((e) => (
                  <li>
                    {" "}
                    <Text fontSize={13}>{e}</Text>
                  </li>
                ))}
              </ul>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
