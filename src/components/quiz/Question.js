import { Box, Center, Flex, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { COLORS } from '../../colors/colors'

const Question = ({ title, options, nextQuestion }) => {
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        // Reset opacity to 1 when the question changes
        setOpacity(1);
    }, [title]); // Assuming 'title' is the prop that changes when the question changes

    const handleOptionClick = () => {
        // Trigger opacity animation and then move to the next question
        setOpacity(0);
        setTimeout(() => {
            nextQuestion();
        }, 500); // Adjust the duration of the animation (in milliseconds) as needed
    };

    return (
        <Box w={'full'}>
            <Center>
                <Text fontSize={'3xl'} color={COLORS.primary} fontWeight={'bold'}>
                    {title}
                </Text>
            </Center>
            <Box bg={'white'} mt={2} rounded={'md'} py={10}>
                <Flex justify={'space-evenly'} align='center' gap={2} opacity={opacity} transition="opacity 0.5s ease-in-out" flexWrap={'wrap'}>
                    {options?.map((option, index) => (
                        <Center
                            key={index}
                            height={32}
                            width={32}
                            rounded='md'
                            _hover={{ opacity: 0.8, borderWidth:3 }}
                            borderWidth={2}
                            borderColor={COLORS.secondary}
                            cursor='pointer'
                            onClick={handleOptionClick}
                        >
                            {option.description}
                        </Center>
                    ))}
                </Flex>
            </Box>
        </Box>
    );
};

export default Question