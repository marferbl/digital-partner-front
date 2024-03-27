// CardSoftware.jsx

import React from 'react';
import { Box, Image, Heading, Text, Button, Flex, Avatar, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { COLORS } from '../../colors/colors';

const CardService = ({ item }) => {
    const { isLoggedIn } = useContext(UserContext);


    const getLabelText = (serviceType) => {
        const label = {
            'partner': 'Partner de ' + item.solutionId?.name || item.otherSolution,
            'development': 'Desarrollo por ' + item.corporate?.name,
            'renting': 'Renting por ' + item.corporate?.name,
            'training': 'Training por' + item.corporate?.name,
            'helps': 'Ayudas por ' + item.corporate?.name,
        }
        return label[serviceType];
    }

    return (
        <Box w='full' borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Center bg={'blue.100'}>{'Servicio'}</Center>
            <Center height={36} >
                <Link to={isLoggedIn ? `/private/service/${item._id}` : `/service/${item._id}`}>
                    <Center h='full'><Avatar size="xl" name={item?.corporate?.name} /> </Center>
                </Link>
            </Center>
            <Box p="1">
                <Box d="flex" alignItems="baseline">
                    <Heading as="p" size="sm" textAlign={'center'} _hover={{ textDecor: 'underline' }}>
                        <Link to={isLoggedIn ? `/private/service/${item._id}` : `/service/${item._id}`}>
                            {getLabelText(item.serviceType)}
                        </Link>
                    </Heading>
                </Box>
                <Flex h={14} mt={3} px={{ base: 3, md: 5, '2xl': 12 }} fontSize={12} mb={2}>
                    <Box
                        h={14}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        width="100%" // You can adjust this width according to your layout
                        textAlign="center"
                        style={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                            whiteSpace: 'normal',
                        }}
                    >
                        {item.description}
                    </Box>
                </Flex>
            </Box>
        </Box >
    );
};

export default CardService;
