import { Box, Center, Flex, Text, Icon } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { COLORS } from '../../colors/colors'
import {
    FiUsers,
    FiTool,
    FiRepeat,
    FiCalendar,
} from "react-icons/fi";
import { useTranslation } from 'react-i18next'; // Import useTranslation

const Question = ({ title, options, nextQuestion, setLineType }) => {
    const [opacity, setOpacity] = useState(1);
    const [selected, setSelected] = useState();
    const { t } = useTranslation('global');

    const question = {
        order: 0,
        title: t('whatAreYouLookingFor'),
        subtitle: t('completeTest'),
        options: [
            {
                label: t('solutions'),
                key: 'solutions',
                icon: FiTool
            },
            {
                label: t('services'),
                key: 'services',
                icon: FiRepeat
            },
            {
                label: t('talent'),
                key: 'talent',
                icon: FiUsers
            },
            {
                label: t('events'),
                key: 'events',
                icon: FiCalendar
            },
        ],
        id: 'lineType'
    }

    useEffect(() => {
        setOpacity(1);
    }, [title]);

    const handleOptionClick = (option) => {
        if (option.key === 'events' || option.key === 'talent') {
            return;
        }
        setSelected(option.key);
        setLineType(option.key);
        setOpacity(0.5);
        setTimeout(() => {
            nextQuestion(selected)
        }, 500);
    };

    return (
        <Box w={'full'}>
            <Center flexDir={'column'}>
                <Text fontSize={'3xl'} color={COLORS.primary} fontWeight={'bold'} px={5}>
                    {question.title}
                </Text>
                <Text fontSize={'xl'} color={'gray.500'} fontWeight={'bold'} px={5}>
                    {question.subtitle}
                </Text>
            </Center>
            <Box mt={2} rounded={'md'} py={10}>
                <Flex justify={'space-evenly'} align='center' gap={2} opacity={opacity} transition="opacity 0.5s ease-in-out" flexWrap={'wrap'}>
                    {question.options?.map((option, index) => (
                        <Center
                            key={index}
                            height={32}
                            width={32}
                            rounded='md'
                            bg={selected === option.key ? 'gray.100' : 'white'}
                            _hover={{ opacity: 0.9, borderWidth: 3 }}
                            borderWidth={2}
                            color={COLORS.primary}
                            borderColor={COLORS.secondary}
                            flexDir={'column'}
                            cursor='pointer'
                            onClick={() => handleOptionClick(option)}
                            opacity={['events', 'talent'].includes(option.key) ? 0.5 : 1}
                            pointerEvents={['events', 'talent'].includes(option.key) && 'none'}
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
                                <Text fontSize={10} textAlign={'center'} color={COLORS.primary}>
                                    {['events', 'talent'].includes(option.key) ? t('comingSoon') : ''}
                                </Text>
                            </Box>
                        </Center>
                    ))}
                </Flex>
                {/* <Flex justify={'end'} mt={10} cursor='pointer'>
                    <GradientButton label={t('next')} type='green' size={'md'} disabled={!selected} onClick={() => nextQuestion(selected)} />
                </Flex> */}
            </Box>
        </Box>
    );
};

export default Question;
