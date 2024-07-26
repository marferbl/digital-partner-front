import { SVGProps } from 'react';
import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex,
  Button,
  Icon
} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { COLORS } from '../../../colors/colors';
import { useTranslation } from 'react-i18next';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';




const features = [
  {
    heading: 'feature1Title',
    content: 'feature1Description',
    icon: FaShoppingCart,
    button: 'featureButton1'
  },
  {
    heading: 'feature2Title',
    content: 'feature2Description',
    icon: FaUser,
    button: 'featureButton2'

  },
  {
    heading: 'feature3Title',
    content: 'feature3Description',
    icon: FaSearch,
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
              <Icon as={feature.icon} w={8} h={8} />
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