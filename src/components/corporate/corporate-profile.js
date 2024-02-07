import { Box, Image, Flex, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { EditIcon } from "@chakra-ui/icons";
import { useBackendUrlBuilder } from "../../hooks/useBackendUrlBuilder";
import axios from "axios";


export const CorporateProfile = ({ corporate }) => {

    return (
        <Box>
            <Flex w={'full'} justify={'space-between'}>
                <Image rounded={"xl"} h={100} src={corporate?.logo} />
                <Flex py={1} px={2} rounded='lg' cursor={'pointer'} _hover={{ shadow: 'md' }} h={'fit-content'} gap={2} align={'center'} >
                    <Text>
                        Editar
                    </Text>
                    <EditIcon />
                </Flex>

            </Flex>
            <Flex gap={3} pt={5} flexDir={'column'}>
                <Flex gap={2}>
                    <Text fontSize={18} fontWeight={'bold'}>Nombre: </Text>
                    <Text fontSize={18}>{corporate?.name}</Text>
                </Flex>
                <Flex gap={2}>
                    <Text fontSize={18} fontWeight={'bold'}>CIF: </Text>
                    <Text fontSize={18}>{corporate?.cif}</Text>
                </Flex>
                <Flex gap={2}>
                    <Text fontSize={18} fontWeight={'bold'}>País: </Text>
                    <Text fontSize={18}>{corporate?.country}</Text>
                </Flex>
                <Flex gap={2}>
                    <Text fontSize={18} fontWeight={'bold'}>Web: </Text>
                    <Text fontSize={18}>{corporate?.web}</Text>
                </Flex>
            </Flex>
        </Box >
    )
}
