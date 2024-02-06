import { useState, useContext } from "react";
import {
    Box,
    Button,
    Center,
    Flex,
    Heading,
    Image,
    Input,
    Text,
    useToast,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

export const ProfileUser = ({ me, toggleShowEdit }) => {
    return (
        <Box>
            <Flex w={'full'} justify={'space-between'}>
                <Image rounded={"xl"} h={100} src={me?.avatar} />
                <Flex py={1} px={2} rounded='lg' cursor={'pointer'} _hover={{ shadow: 'md' }} h={'fit-content'} gap={2} align={'center'} onClick={toggleShowEdit}>
                    <Text>
                        Editar
                    </Text>
                    <EditIcon />
                </Flex>

            </Flex>
            <Flex gap={3} pt={5} flexDir={'column'}>
                <Text fontSize={18}>{me?.name}</Text>
                <Text fontSize={16}>{me?.email}</Text>
                <Text fontSize={16}>{me?.age}</Text>
                <Text fontSize={16}>{me?.phone}</Text>
                <Text fontSize={16}>{me?.job}</Text>
            </Flex>
        </Box >
    )
}