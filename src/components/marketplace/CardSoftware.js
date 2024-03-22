// CardSoftware.jsx

import React from 'react';
import { Box, Image, Heading, Text, Button, Flex, Avatar, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { COLORS } from '../../colors/colors';

const CardSoftware = ({ _id, name, website, logo, description }) => {
    const { isLoggedIn } = useContext(UserContext);

    return (
        <Box w='full' borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Center height={40} >
                {logo ? <Image w={28} src={logo} alt={name} height={24} backgroundSize={'contain'} /> : <Center h='full'><Avatar size="xl" name={name} /> </Center>}
            </Center>
            <Box p="1">
                <Box d="flex" alignItems="baseline">
                    <Heading as="p" size="sm" textAlign={'center'} _hover={{ textDecor: 'underline' }}>
                        <Link to={isLoggedIn ? `/private/solution/${_id}` : `/solution/${_id}`}>
                            {name}
                        </Link>
                    </Heading>
                </Box>
                <Flex h={14} mt={3} px={12} fontSize={12} mb={2}>
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
                        {description}
                    </Box>
                </Flex>
            </Box>
        </Box >
    );
};

export default CardSoftware;
