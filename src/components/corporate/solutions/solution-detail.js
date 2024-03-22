import { Box, Text, Flex, Grid, GridItem, Avatar } from "@chakra-ui/react";
import React, { useState, useContext, useEffect } from "react";


export const SolutionDetail = ({ solution }) => {

    const KEYS_FEATURES = {
        rrhh: 'RRHH',
        sellmarketing: 'Ventas y marketing',
        finance: 'Finanzas',
        logistics: 'Cadena de suministro',
        it: 'IT',
        data: 'Data',
        other: 'Otro'
    };


    return (
        <Box mt={6} p={5} rounded={"xl"} bgColor={"white"} w={"100%"}>
            {solution && <Grid templateColumns="repeat(8, 1fr)" gap={6} pb={20}>
                <GridItem colSpan={3}>
                    <Box textAlign={'center'} mt={1} rounded={"xl"} bgColor={"white"} w={"100%"} px={10}>
                        <Avatar size="2xl" name={solution.name} src={solution.logo} mb={5} />
                        <Text fontWeight={'bold'} fontSize={34}>{solution.name}</Text>
                        <Text fontSize={18} mt={3} textDecor='underline'>{solution.website}</Text>
                    </Box>
                </GridItem>
                <GridItem colSpan={5} pr={7}>
                    <Box mt={1} p={5} bgColor={"white"} w={"100%"} minH={300} px={10} rounded='xl' shadow={'xl'} mb={3}>
                        <Text fontSize={14} mt={3} fontWeight='bold' textDecor={'underline'}>Descripción:</Text>
                        <Text fontSize={18} mt={0}>{solution.description}</Text>
                        <Text fontSize={14} mt={5} fontWeight='bold' textDecor={'underline'}>Funcionalidad:</Text>
                        <Flex align={'center'} gap={2} pt={2}>
                            <Text fontSize={18}>{KEYS_FEATURES[solution.feature]}</Text>
                            ( <Text fontSize={18} >{solution.isVertical ? 'Solución vertical' : 'No es solución vertical'}</Text> )
                        </Flex>
                    </Box>
                </GridItem>
            </Grid>}
        </Box>
    )
};
