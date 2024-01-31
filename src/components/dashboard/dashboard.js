import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import SoftwareSearcher from "../../components/base/landing/searcher-software";
import { Link } from "react-router-dom";


const Dashboard = () => {

  const array = ['Fichajes', 'Recursos humanos', 'Finanzas', 'Contabilidad']


  return (
    <Flex py={10} flexDir={'column'} gap={4} >
      <Box bg={'white'} rounded={'lg'} py={4}>
        <SoftwareSearcher />
      </Box>
      <Box bg={'white'} py={4} rounded={'lg'}>
        <Text fontWeight={'bold'} fontSize={16} textAlign={'center'} mb={4}>Ultimas búsquedas</Text>
        <Flex flexDir={'column'} gap={3} fontSize={14} px={4}>
          {array.map((item, index) => (
            <Link to={`/private/search/${item}`} key={index}>
              <Text key={index} color={'#00A3FF'}>{item}</Text>
            </Link>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Dashboard;
