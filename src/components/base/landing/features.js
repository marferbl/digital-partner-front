import { SVGProps } from 'react';
import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex,
  Button
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { COLORS } from '../../../colors/colors';
import { useTranslation } from 'react-i18next';




const features = [
  {
    heading: 'feature1Title',
    content: 'feature1Description',
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        ></path>
      </svg>
    ),
    button: 'featureButton1'
  },
  {
    heading: 'feature2Title',
    content: 'feature2Description',
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        ></path>
      </svg>
    ),
    button: 'featureButton2'

  },
  {
    heading: 'feature3Title',
    content: 'feature3Description',
    icon: (
      <svg
        width={36}
        height={36}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        color="white" // Match the button's text color
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        ></path>
      </svg>
    ),
    button: 'featureButton3'

  }
];

const Features = () => {
  const { t } = useTranslation('global')

  const gradientColor = "#1e96d9";
  return (
    <Container maxW="6xl" p={{ base: 5, md: 10 }} mb={{ base: 5, lg: 20 }}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} placeItems="center" spacing={10} mb={4}>
        {features.map((feature, index) => (
          <Box
            key={index}
            bg={'gray.100'}
            p={6}
            rounded="lg"
            textAlign="center"
            pos="relative"
          >
            <Flex
              p={2}
              w="max-content"
              color="white"
              bgGradient="linear(to-br, #228be6, #15aabf)"
              rounded="md"
              marginInline="auto"
              pos="absolute"
              left={0}
              right={0}
              top="-1.5rem"
              boxShadow="lg"
            >
              {feature.icon}
            </Flex>
            <chakra.h3 fontWeight="semibold" fontSize="md" mt={6}>
              {t(feature.heading)}
            </chakra.h3>
            <Text fontSize="xs" mt={4} h={16}>
              {t(feature.content)}
            </Text>
            <Link to={{ pathname: '/initial-page-digit/a', state: { filter: 'register' } }} >
              <Button
                mt={5}
                bgGradient={`linear(to-r, ${COLORS.secondary}, #17a7c2)`} // Adjust gradient stops as needed
                _hover={{ bgGradient: `linear(to-r, ${COLORS.secondary}, #17a7c2)` }} // Adjust hover effect if necessary
                _active={{ bgGradient: `linear(to-r, ${COLORS.secondary}, #17a7c2)` }} // Adjust active effect if necessary
                color="white"
                fontWeight="bold"
                _focus={{ boxShadow: "outline" }}
              >
                {t(feature.button)}
              </Button>
            </Link>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Features;