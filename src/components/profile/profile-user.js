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
import { Link } from "react-router-dom";
import { dateToString } from "../../utils/methods";
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
                <GridItem colSpan={1} rounded={'md'}>
                    <Flex pb={4} flexDir='column' align={'center'} pt={3}>
                        <Image rounded={"100%"} h={28} w={28} src={me?.avatar} />

                    </Flex>
                    <Box px={3}>
                        <Box rounded={'lg'} w={'full'} mb={3}>
                            {/* <Box py={3} px={4}>
                                <Text fontSize={14} mr={2}> No tienes corporate.</Text>
                                <Text fontSize={14} mt={2} mr={2}> No tienes perfil de freelance.</Text>
                            </Box> */}
                        </Box>
                    </Box>
                </GridItem>
                <GridItem colSpan={2} w='full'>
                    <Flex gap={1} flexDir='column' >
                        <Text mt={2} fontSize={20} fontWeight='bold'> {me?.name}</Text>
                        <Text mt={2} fontStyle='italic'>{me?.email}</Text>
                        <Text>
                            Miembro desde {dateToString(me?.createdAt)}
                        </Text>
                        {/* <Text>
                            {me?.corporate ? `Perteneces a la corporate ${me?.corporate?.name}` : 'No perteneces a ninguna corporate'}
                        </Text> */}
                    </Flex>



                    {/* <CardTemplate>
                        <Text fontWeight="bold" mr={2} textAlign='center' borderBottomWidth={1}> Freelance</Text>
                        <EmptyState>
                            <Text mb={2} textAlign='center'> No tienes ninguna actividad de freelance</Text>
                            <Link to='/private/freelance'>
                                <GradientButton label='Ir a freelance' type='red' size={'sm'} />
                            </Link>
                        </EmptyState>
                    </CardTemplate> */}
                    <Box h={2}></Box>

                </GridItem>
                {/* <GridItem w='full' colSpan={1} px={5}>
                    <CardTemplate>
                        <Text fontWeight="bold" mr={2} textAlign='center' borderBottomWidth={1}> Selección</Text>
                        <EmptyState>
                            <Text mb={2} textAlign='center'> No tienes ninguna actividad de selección</Text>
                            <Link to='/private/freelance'>
                                <GradientButton label='Ir a selección' type='red' size={'sm'} />
                            </Link>
                        </EmptyState>
                    </CardTemplate>
                </GridItem> */}
            </Grid>

        </Box >
    );
}