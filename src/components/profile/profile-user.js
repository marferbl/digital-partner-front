import { useState, useContext } from "react";
import {
    Box,
    Button,
    Center,
    Flex,
    Grid,
    Image,
    GridItem,
    Text,
    useToast,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import CardTemplate from "../base/card-template";
import { EmptyState } from "../base/empty-state";
import GradientButton from "../base/GradientButton";
import { LineChart } from "../charts/Linechart";

export const ProfileUser = ({ me }) => {

    const data = [
        {
            "id": "japan",
            "color": "hsl(328, 70%, 50%)",
            "data": [
                {
                    "x": "01/02",
                    "y": 10
                },
                {
                    "x": "02/02",
                    "y": 15
                },
                {
                    "x": "03/02",
                    "y": 9
                },
                {
                    "x": "04/02",
                    "y": 32
                },
                {
                    "x": "05/02",
                    "y": 23
                },
                {
                    "x": " 06/02",
                    "y": 23
                },
                {
                    "x": "07/02",
                    "y": 21
                },
                {
                    "x": "08/02",
                    "y": 14
                },
                {
                    "x": "09/02",
                    "y": 12
                },
                {
                    "x": "10/02",
                    "y": 40
                },
                {
                    "x": "11/02",
                    "y": 31
                },
                {
                    "x": "12/02",
                    "y": 32
                }
            ]
        },
    ]

    return (
        <Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={6} justifyItems={'center'}>
                <GridItem colSpan={1} borderWidth={1} rounded={'md'} shadow={'xl'}>
                    <Flex pb={4} flexDir='column' align={'center'} pt={3}>
                        <Image rounded={"100%"} h={28} w={28} src={me?.avatar} />
                        <Flex px={10} gap={1} flexDir='column' textAlign={'center'} >
                            <Text mt={2} fontSize={20} fontWeight='bold'> {me?.name}</Text>
                            <Text mt={2} fontStyle='italic'>{me?.email}</Text>


                        </Flex>
                    </Flex>
                    <Box px={3}>
                        <Box rounded={'lg'} w={'full'} mb={3}>
                            <Box py={3} px={4}>
                                <Text fontSize={14} mr={2}> No tienes corporate.</Text>
                                <Text fontSize={14} mt={2} mr={2}> No tienes perfil de freelance.</Text>
                            </Box>
                        </Box>
                    </Box>
                </GridItem>
                <GridItem colSpan={1} w='full'>
                    <CardTemplate>
                        <Text fontWeight="bold" mr={2} textAlign='center' borderBottomWidth={1}> Freelance</Text>
                        <EmptyState>
                            <Text mb={2} textAlign='center'> No tienes ninguna actividad de freelance</Text>
                            <GradientButton label='Ir a freelance' type='red' size={'sm'} />
                        </EmptyState>
                    </CardTemplate>
                    <Box h={2}></Box>
                    {/* <CardTemplate mt={4}>
                        <Text fontWeight="bold" mr={2} textAlign='center' borderBottomWidth={1}> Freelance</Text>
                        <EmptyState>
                            <Text mb={2} textAlign='center'> No tienes ninguna actividad de freelance</Text>
                            <GradientButton label='Ir a freelance' type='red' size={'sm'} />
                        </EmptyState>
                    </CardTemplate> */}
                </GridItem>
            </Grid>
            {/* <GridItem w='full' colSpan={3} mt={6} px={5}>
                <CardTemplate>
                    <Text fontWeight="bold" mr={2} textAlign='center' borderBottomWidth={1}> Estadísticas</Text>
                    <Box minH={200}>
                        <LineChart data={data} />
                        <Text textAlign={'center'}>Visitas en la última semana</Text>

                    </Box>
                </CardTemplate>
            </GridItem> */}
        </Box >
    );
}