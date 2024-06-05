import React from 'react';
import { Box, SimpleGrid, Text, Icon, Heading, VStack } from '@chakra-ui/react';
import { FaShoppingCart, FaUser, FaUsers } from 'react-icons/fa';

const PlanCard = ({ icon, title, description, color, onClick, isSelected }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    p={5}
    textAlign="center"
    cursor="pointer"
    _hover={{ opacity: 0.7, transform: 'scale(1.01)' }}
    onClick={onClick}
    bg={isSelected ? 'gray.50' : 'white'}
    borderColor={isSelected ? 'blue.200' : 'gray.100'}
  >
    <VStack spacing={4}>
      <Icon as={icon} color={color} w={10} h={10} />
      <Heading size="md">{title}</Heading>
      <Text fontSize={10}>{description}</Text>
    </VStack>
  </Box>
);

const PlansSelector = ({ setPlanSelected, selectedPlan }) => (
  <Box p={2}>
    <Heading mb={6} textAlign="center">Plans</Heading>
    <SimpleGrid columns={[1, null, 3]} spacing={3}>
      <PlanCard
        icon={FaShoppingCart}
        title="Seller"
        description="Ideal para empresas que venden software o servicios. Incluye Soluciones, Servicios y Eventos"
        color="red.300"
        onClick={() => setPlanSelected('seller')}
        isSelected={selectedPlan === 'seller'}
      />
      <PlanCard
        icon={FaUser}
        title="Buyer"
        description="¿Eres una empresa que contrata servicios o necesita soluciones? Incluye gestión de equipo, Licencias y Búsqueda de empleo"
        color="green.300"
        onClick={() => setPlanSelected('buyer')}
        isSelected={selectedPlan === 'buyer'}
      />
      <PlanCard
        icon={FaUsers}
        title="Full"
        description="Necesitas ambas cosas, vender y comprar. Este es tu plan. Incluye todo lo anterior y más."
        color="blue.300"
        onClick={() => setPlanSelected('full')}
        isSelected={selectedPlan === 'full'}
      />
    </SimpleGrid>
  </Box>
);

export default PlansSelector;
