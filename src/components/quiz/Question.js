import { Box, Center, Flex, Text, Icon } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { COLORS } from '../../colors/colors'


const Question = ({ title, options, nextQuestion }) => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        setOpacity(1);
    }, [title]);

    const handleOptionClick = (option) => {
        setOpacity(0);
        setTimeout(() => {
            nextQuestion(option);
        }, 500);
    };

    return (
        <Box w={'full'}>
            <Center>
                <Text fontSize={'3xl'} color={COLORS.primary} fontWeight={'bold'} px={5}>
                    {title}
                </Text>
            </Center>
            <Box mt={2} rounded={'md'} py={10}>
                <Flex justify={'space-evenly'} align='center' gap={2} opacity={opacity} transition="opacity 0.5s ease-in-out" flexWrap={'wrap'}>
                    {options?.map((option, index) => (
                        <Center
                            key={index}
                            height={32}
                            width={32}
                            rounded='md'
                            bg={'white'}
                            _hover={{ opacity: 0.8, borderWidth: 3 }}
                            borderWidth={2}
                            color={COLORS.primary}
                            borderColor={COLORS.secondary}
                            flexDir={'column'}
                            cursor='pointer'
                            onClick={() => handleOptionClick(option)}
                        >
                            <Box _hover={{ opacity: 0.5 }}>
                                <Box textAlign={'center'}>
                                    {option.icon && <Icon
                                        fontSize="26"
                                        _groupHover={{
                                            color: "white",
                                        }}
                                        color={COLORS.primary}
                                        as={option.icon}
                                    />}
                                </Box>
                                <Text textAlign={'center'} color={COLORS.primary}>
                                    {option.label}
                                </Text>
                            </Box>
                        </Center>
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};

export default Question