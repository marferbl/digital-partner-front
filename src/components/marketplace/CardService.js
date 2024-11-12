// CardSoftware.jsx

import React from 'react';
import { Box, Image, Heading, Text, Button, Flex, Avatar, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { COLORS } from '../../colors/colors';
import { FcLike } from 'react-icons/fc';
import { FiRepeat } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';

const CardService = ({ item, isFavorites }) => {
    const { isLoggedIn } = useContext(UserContext);


    const getLabelText = (serviceType) => {
        if (item.title) {
            return item.title;
        }
        const label = {
            'partner': 'Partner de ' + (item.solutionId?.name || item.otherSolution),
            'development': 'Desarrollo por ' + item.corporate?.name,
            'renting': 'Renting por ' + item.corporate?.name,
            'training': 'Training por' + item.corporate?.name,
            'helps': 'Ayudas por ' + item.corporate?.name,
        }
        return label[serviceType];
    }

    return (
        <Box w='full' borderWidth="1px" borderRadius="lg" overflow="hidden" background={'rgba(255, 255, 255, 0.2)'} backdropBlur={'2xl'} boxShadow={'xl'}>
            {isFavorites && <Flex justifyContent="end" pr={1} alignItems="center" h={6} >
                <FcLike size={20} color={COLORS.primary} />
            </Flex>}
            <Center height={20} >
                <Link to={`/service/${item._id}`}>
                    <Center h='full'><Avatar src={item?.logo} size="md" name={item?.corporate?.name} /> </Center>
                </Link>
            </Center>
            <Box p="1">
                <Box d="flex" alignItems="baseline">
                    <Heading as="p" size="xs" textAlign={'center'} _hover={{ textDecor: 'underline' }} fontFamily='Montserrat' fontWeight={'bold'} h={10} display='flex' justifyContent={'center'} alignItems={'center'}>
                        <Link to={`/service/${item._id}`}>
                            {getLabelText(item.serviceType)}
                        </Link>
                    </Heading>
                    <Text textAlign={'center'} fontSize={10} h={6}>
                        {item.corporate?.name === 'Digitalando' ? '' : item.corporate?.name}
                    </Text>
                </Box>
                <Flex h={14} mt={3} px={{ base: 3, md: 5, '2xl': 12 }} fontSize={10} mb={4}>
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
                <Flex justify={'center'} p={2}>
                    <FiRepeat className='service-tooltip' />
                    <Tooltip anchorSelect=".service-tooltip" place="bottom">
                        Servicio
                    </Tooltip>
                </Flex>
            </Box>
        </Box >
    );
};

export default CardService;
