import React from 'react';
import { Box, SimpleGrid, Text, Icon, Heading, Center, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaShoppingCart, FaUser, FaUsers } from 'react-icons/fa';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';


const PlanCard = ({ icon, title, description, gradient, onClick, isSelected, index }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    py={4}
    px={2}
    textAlign="left"
    cursor="pointer"
    _hover={{ opacity: 0.7, transform: 'scale(1.01)' }}
    onClick={onClick}
    bg={isSelected ? 'gray.50' : 'black'}
    borderColor={isSelected ? 'blue.200' : 'gray.100'}
  >
    <Box bg="black" p={2} borderRadius="md" color="white" fontSize={'xs'}>
      <List spacing={3}>
        {/* Enabled Features */}
        <ListItem color="gray.500" >
          <ListIcon as={(index === 0 || index === 2) ? CheckIcon : CloseIcon} color={(index === 0 || index === 2) && "yellow.400"} />
          <Text as="span" color={(index === 0 || index === 2) ? "white" : 'gray.600'} >Crear y Gestionar soluciones</Text>
        </ListItem>
        <ListItem color="gray.500" >
          <ListIcon as={(index === 0 || index === 2) ? CheckIcon : CloseIcon} color={(index === 0 || index === 2) && "yellow.400"} />
          <Text as="span" color={(index === 0 || index === 2) ? "white" : 'gray.600'} >Crear y Gestionar servicios</Text>
        </ListItem>
        <ListItem color="gray.500" >
          <ListIcon as={(index === 0 || index === 2) ? CheckIcon : CloseIcon} color={(index === 0 || index === 2) && "yellow.400"} />
          <Text as="span" color={(index === 0 || index === 2) ? "white" : 'gray.600'} >Crear y Gestionar eventos</Text>
        </ListItem>

        {/* Disabled Features */}
        <ListItem color="gray.500" pt={3}>
          <ListIcon as={(index === 1 || index === 2) ? CheckIcon : CloseIcon} color={(index === 1 || index === 2) && "yellow.400"} />
          <Text as="span" color={(index === 1 || index === 2) ? "white" : 'gray.600'} >Gestión de equipo</Text>
        </ListItem>
        <ListItem color="gray.500">
          <ListIcon as={(index === 1 || index === 2) ? CheckIcon : CloseIcon} color={(index === 1 || index === 2) && "yellow.400"} />
          <Text as="span" color={(index === 1 || index === 2) ? "white" : 'gray.600'} >Administración de licencias</Text>
        </ListItem>
        <ListItem color="gray.500">
          <ListIcon as={(index === 1 || index === 2) ? CheckIcon : CloseIcon} color={(index === 1 || index === 2) && "yellow.400"} />
          <Text as="span" color={(index === 1 || index === 2) ? "white" : 'gray.600'} >Búsqueda de empleo</Text>
        </ListItem>
      </List>
    </Box>
    <Center mt={10} bgGradient={gradient} rounded='full' h={64} w={64}>
      <Center color={'white'} fontSize={24} rounded='100%' h={32} w={32} bg={'black'} size="md">{title}</Center>
    </Center>

  </Box>
);

const PlansSelector = ({ setPlanSelected, selectedPlan }) => (
  <Box p={2}>
    <Heading mb={6} textAlign="center" color='white'>Planes</Heading>
    <SimpleGrid columns={[1, null, 3]} spacing={3}>
      <PlanCard
        icon={FaShoppingCart}
        title="Seller"
        description="Ideal para empresas que venden software o servicios. Incluye Soluciones, Servicios y Eventos"
        gradient="radial-gradient(circle, black 10%, blue.600 50%, blue.400 70%)"
        onClick={() => setPlanSelected('seller')}
        isSelected={selectedPlan === 'seller'}
        index={0}
      />
      <PlanCard
        icon={FaUser}
        title="Buyer"
        description="¿Eres una empresa que contrata servicios o necesita soluciones? Incluye gestión de equipo, Licencias y Búsqueda de empleo"
        gradient="radial-gradient(circle, black 10%, pink.600 40%, pink.400 70%)"
        onClick={() => setPlanSelected('buyer')}
        isSelected={selectedPlan === 'buyer'}
        index={1}
      />
      <PlanCard
        icon={FaUsers}
        title="Full"
        description="Necesitas ambas cosas, vender y comprar. Este es tu plan. Incluye todo lo anterior y más."
        gradient="radial-gradient(circle, black 10%, yellow.600 40%, yellow.400 70%)"
        onClick={() => setPlanSelected('full')}
        isSelected={selectedPlan === 'full'}
        index={2}
      />
    </SimpleGrid>
  </Box>
);

export default PlansSelector;
