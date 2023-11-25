import React, { useEffect, useContext } from "react";
import {
  Text,
  Box,
  Heading,
} from "@chakra-ui/react";
import SectionMarketPlace from "./section-marketplace";

export const Marketplace = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return <Box p={5} >
    <Heading textAlign={'center'} fontFamily={'Montserrat'} fontSize={30}>
      Marketplace
    </Heading>
    <Box px={{ base: 4, md: 10, lg: 60 }}>
      <SectionMarketPlace title={'Recomendados'} />
      <SectionMarketPlace title={'Gestion financiera'} />
      <SectionMarketPlace title={'Recursos Humanos'} />



    </Box>
  </Box>
};

