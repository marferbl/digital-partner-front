// CardSoftware.jsx

import React from 'react';
import { Box, Heading, Text, Button, Flex, Avatar, Center } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { COLORS } from '../../colors/colors';
import { FcLike } from 'react-icons/fc';
import { FiTool, FiRepeat } from "react-icons/fi";
import { Tooltip } from 'react-tooltip';
import ImageGallerySlider from '../base/GallerySlider';


const CardSoftware = ({ _id, name, logo, description, lineType, isFavorites, ...rest }) => {
    const { isLoggedIn } = useContext(UserContext);
    const { gallery } = rest;

    return (
        <Box w='full' borderWidth="1px" borderRadius="lg" overflow="hidden" background={'rgba(255, 255, 255, 0.2)'} backdropBlur={'2xl'} boxShadow={'xl'}>

            {isFavorites && <Flex justifyContent="end" pr={1} alignItems="center" h={6} >
                <FcLike size={20} color={COLORS.primary} />
            </Flex>}

            <Flex px={4} align='center' gap={2} pt={2}>
                {lineType === 'solutions' && <Link to={`/solution/${_id}`}>
                    <Center h='full'>
                        {logo ? <img src={logo} alt={name} className="h-10 w-10 rounded-lg" /> :
                            <Avatar size="md" rounded={'md'} name={name} src={logo} />}
                    </Center>
                </Link>}
                <Heading fontSize={12} as="p" size="sm" textAlign={'center'} _hover={{ textDecor: 'underline' }} fontFamily='Montserrat' fontWeight={'bold'} h={10} display='flex' justifyContent={'center'} alignItems={'center'}>
                    {lineType === 'solutions' && <Link to={`/solution/${_id}`}>
                        {name}
                    </Link>}
                </Heading>
            </Flex>
            <Box>
                <ImageGallerySlider images={gallery} width={140} height={40} hideArrows />
            </Box>
            <Box p="1">
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
                        {description}
                    </Box>
                </Flex>
                <Flex justify={'center'} p={2}>
                    <FiTool className='solution-tooltip' />
                    <Tooltip anchorSelect=".solution-tooltip" place="bottom">
                        Solución
                    </Tooltip>
                </Flex>
            </Box>
        </Box >
    );
};

export default CardSoftware;
