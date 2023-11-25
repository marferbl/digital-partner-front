// CardSoftware.jsx

import React from 'react';
import { Box, Image, Heading, Text, Button, Flex } from '@chakra-ui/react';

const CardSoftware = ({ name, description, logo, slogan }) => {
    return (
        <Box maxW="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box height={40}>
                <Image src={logo} alt={name} height={'100%'} backgroundSize={'contain'} />
            </Box>
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Heading as="h2" size="md" isTruncated>
                        {name}
                    </Heading>
                </Box>
                <Text mt="2" color="gray.500" fontSize={12} textAlign={'justify'} pr={3} height={34} overflow={'scroll'}>
                    {slogan}
                </Text>
                <Flex justify={'end'} mt={2}>
                    <Button mt="4" bgColor={'#1f2d52'} color='white' fontSize={14} fontWeight={'light'} _hover={{shadow:'xl'}}>
                        Detalles
                    </Button>
                </Flex>
            </Box>
        </Box>
    );
};

export default CardSoftware;
