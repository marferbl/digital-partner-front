// CardSoftware.jsx

import React from 'react';
import { Box, Image, Heading, Text, Button, Flex, Avatar, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom'

const CardSoftware = ({ _id, name, website, logo }) => {
    return (
        <Box w='full' borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box height={40}>
                {logo ? <Image w={'100%'} src={logo} alt={name} height={'100%'} backgroundSize={'contain'} /> : <Center h='full'><Avatar size="xl" name={name} /> </Center>}
            </Box>
            <Box p="1">
                <Box d="flex" alignItems="baseline">
                    <Heading as="p" size="sm" textAlign={'center'}>
                        {name}
                    </Heading>
                </Box>
                <Text mt="2" color="gray.500" fontSize={12} py={1} overflow={'scroll'} textAlign='center'>
                    {website}
                </Text>
                <Flex justify={'center'} mt={2}>
                    <Button mb="4" bgColor={'#1f2d52'} color='white' fontSize={14} fontWeight={'light'} _hover={{ shadow: 'xl' }}>
                        <Link to={`/private/solution/${_id}`}>
                            Detalles
                        </Link>
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
};

export default CardSoftware;
