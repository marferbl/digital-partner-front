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
import GalleryPhotoCard from './gallery-photo-card';

const CardEvent = ({ isFavorites, item }) => {
    const { isLoggedIn } = useContext(UserContext);

    const keys = {
        'remote': 'Remoto',
        'presential': 'Presencial',
    }

    const getLabelType = (item) => {
        if (item.type.length === 2) {
            return 'Remoto y Presencial'
        }
        return keys[item.type[0]]
    }

    return (
        <Box w='full' borderWidth="1px" borderRadius="lg" overflow="hidden" background={'rgba(255, 255, 255, 0.2)'} backdropBlur={'2xl'} boxShadow={'xl'}>
            {isFavorites && <Flex justifyContent="end" pr={1} alignItems="center" h={6} >
                <FcLike size={20} color={COLORS.primary} />
            </Flex>}
            <Box position="relative" fontSize={10} color='white'>
                <GalleryPhotoCard gallery={item.gallery || [item.photo || '/logo-d.png']} />
                <Text position="absolute" top={0} left={0} p={1} bg="rgba(0, 0, 0, 0.5)" borderRadius="lg">
                    {item.address}
                </Text>
                <Text position="absolute" top={0} right={0} p={1} bg="rgba(0, 0, 0, 0.5)" borderRadius="lg">
                    {new Date(item.date).toLocaleDateString()} - {new Date(item.time).toLocaleTimeString({}, { hour: '2-digit', minute: '2-digit' })}H
                </Text>
            </Box>
            <Box p="1">
                <Box d="flex" alignItems="baseline">
                    <Heading as="p" size="xs" textAlign={'center'} _hover={{ textDecor: 'underline' }} fontFamily='Roobert' fontWeight={'bold'} h={10} display='flex' justifyContent={'center'} alignItems={'center'}>
                        <Link to={`/event/${item._id}`}>
                            {item.name}
                        </Link>
                    </Heading>
                    <div className='flex gap-2 justify-center text-xs text-gray-500'>
                        <Text borderRadius="lg">
                            {getLabelType(item)}
                        </Text>
                    </div>
                </Box>
                <Flex h={14} mt={2} px={{ base: 3, md: 5, '2xl': 12 }} fontSize={10} mb={4}>
                    <Box
                        h={14}
                        overflow="hidden"
                        textOverflow="ellipsis"
                        width="100%"
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
        </Box>
    );
};

export default CardEvent;
